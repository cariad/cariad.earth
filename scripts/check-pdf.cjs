// Prints the built page to its PDF, then checks that text extractors recover the page's text. Run with `mise run lint:pdf`.

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const url = require("node:url");

const puppeteer = require("puppeteer");

const { printPdf, source } = require("./pdf-path.cjs");

const EXTRACTORS = {
  "pdfminer.six": (pdf) => execFileSync("pdf2txt.py", [pdf], { encoding: "utf8" }),
  PDFium: (pdf) =>
    execFileSync("pypdfium2", ["extract-text", pdf], { encoding: "utf8" }).replace(/^# Page \d+$/gm, ""),
};

// PDFium writes this character in place of a hyphen that ends a line.
const LINE_END_HYPHEN = String.fromCharCode(0xfffe);

const quote = JSON.stringify;

const lines = (text) =>
  text
    .replaceAll(LINE_END_HYPHEN, "-\n")
    .split(/[\r\n\f]+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

// Prints the PDF, then reads the page with its stylesheets off, because they're part of what's being checked.
async function expected() {
  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();
    await page.goto(url.pathToFileURL(source).href);

    const pdf = await printPdf(page);

    const text = await page.evaluate(() => {
      for (const sheet of document.styleSheets) sheet.disabled = true;

      // The only things the print styles may do to the text.
      for (const element of document.querySelectorAll(".pdf, .screen-only")) element.remove();
      for (const heading of document.querySelectorAll("h2")) heading.textContent = heading.textContent.toUpperCase();

      return document.querySelector("main").innerText;
    });

    return { pdf, text };
  } finally {
    await browser.close();
  }
}

// A line break in the PDF stands for a line break or a space on the page, or for nothing (after a hyphen, say).
// A line of the PDF mustn't run on past a line break on the page.
function difference(page, extracted) {
  let at = 0;

  for (const line of extracted) {
    if (page[at] === "\n" || page[at] === " ") at++;

    for (let i = 0; i < line.length; i++, at++) {
      if (page[at] !== line[i]) {
        return `after ${quote(page.slice(Math.max(0, at - 40), at))} the page has ${quote(page.slice(at, at + 25))} but the PDF has ${quote(line.slice(i, i + 25))}`;
      }
    }
  }

  return at < page.length ? `the PDF stops before ${quote(page.slice(at, at + 40))}` : null;
}

function fonts(pdf) {
  const raw = fs.readFileSync(pdf, "latin1");
  const problems = [];

  if (/\/Subtype \/Type3/.test(raw)) problems.push("a Type3 font is embedded, so a character is missing from the web fonts");

  for (const name of new Set([...raw.matchAll(/\/BaseFont \/[A-Z]{6}\+([^\s/]+)/g)].map((match) => match[1]))) {
    if (!/^(Geologica|SNPro)/.test(name)) problems.push(`${name} is embedded, so the page fell back to a system font`);
  }

  return problems;
}

async function main() {
  const want = await expected();
  const { pdf } = want;
  const page = lines(want.text).join("\n");
  const problems = fonts(pdf);

  for (const [name, extract] of Object.entries(EXTRACTORS)) {
    const problem = difference(page, lines(extract(pdf)));
    if (problem) problems.push(`${name}: ${problem}`);
  }

  if (problems.length) throw new Error(problems.join("\n"));

  console.log(`${Object.keys(EXTRACTORS).join(" and ")} recover the page's text from ${pdf}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
