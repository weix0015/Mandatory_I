import fs from "fs";

export function readPage(path) {
  return fs.readFileSync(path).toString();
}

export function renderPage(page, config = {}) {
  const header = fs.readFileSync("./public/components/header/header.html").toString();
  const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
  return header.replace("$TAB_TITLES$", config.tabTitle || "Mandatory_I")
    .replace("$CSS_LINKS$", config.CSSLink || "")
    + page
    + footer.replace("$JAVASCRIPT_SCRIPTS$", config.JavascriptScript || "");
}