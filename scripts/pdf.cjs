// Converts the built website to a PDF. Run with `mise run build:pdf`.

const fs = require("node:fs");
const path = require("node:path");
const url = require("node:url");

const puppeteer = require("puppeteer");

const source = path.resolve("site/public/index.html");

async function main() {
  if (!fs.existsSync(source)) {
    throw new Error(`${source} doesn't exist. Run "mise run build:html" first.`);
  }

  const browser = await puppeteer.launch();
  let target;

  try {
    const page = await browser.newPage();
    await page.goto(url.pathToFileURL(source).href);

    // The page names the PDF, so that its link and the file can't disagree.
    const href = await page.evaluate(() =>
      document.querySelector('a[href$=".pdf"]')?.getAttribute("href"),
    );

    if (!href) {
      throw new Error(`${source} doesn't link to a PDF.`);
    }

    target = path.join(path.dirname(source), decodeURIComponent(href));

    await page.pdf({
      outline: true,
      path: target,
      preferCSSPageSize: true,
      printBackground: true,
    });
  } finally {
    await browser.close();
  }

  console.log(`Wrote ${target}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
