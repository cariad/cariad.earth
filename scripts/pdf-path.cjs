// Prints the built page to the PDF it links to, for pdf.cjs and check-pdf.cjs.

const path = require("node:path");

const source = path.resolve("site/public/index.html");

// The page names the PDF, so that its link and the file can't disagree.
async function pdfPath(page) {
  const href = await page.evaluate(() =>
    document.querySelector('a[href$=".pdf"]')?.getAttribute("href"),
  );

  if (!href) {
    throw new Error(`${source} doesn't link to a PDF.`);
  }

  return path.join(path.dirname(source), decodeURIComponent(href));
}

// Prints the page to its PDF and returns the PDF's path.
async function printPdf(page) {
  const target = await pdfPath(page);

  await page.pdf({
    path: target,
    preferCSSPageSize: true,
    printBackground: true,
  });

  return target;
}

module.exports = { printPdf, source };
