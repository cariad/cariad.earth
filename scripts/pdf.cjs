// Converts the built website to a PDF. Run with `mise run build:pdf`.

const fs = require("node:fs");
const url = require("node:url");

const puppeteer = require("puppeteer");

const { printPdf, source } = require("./pdf-path.cjs");

async function main() {
  if (!fs.existsSync(source)) {
    throw new Error(`${source} doesn't exist. Run "mise run build:html" first.`);
  }

  const browser = await puppeteer.launch();
  let target;

  try {
    const page = await browser.newPage();
    await page.goto(url.pathToFileURL(source).href);

    target = await printPdf(page);
  } finally {
    await browser.close();
  }

  console.log(`Wrote ${target}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
