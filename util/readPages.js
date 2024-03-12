import { renderPage, readPage } from "./templatingEngine.js";

const home = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(home, {
  tabTitle: "Mandatory_I",
  CSSLink: '<link rel="stylesheet" href="/pages/homepage/homepage.css">',
  JavascriptScript: '<script src="/pages/homepage/homepage.js"></script>'
});

const gitTerminal = readPage("./public/pages/git_terminal/git_terminal.html");
export const gitTerminalPage = renderPage(gitTerminal, {
  tabTitle: "Git & Terminal"
});

const javascriptDatatypes = readPage("./public/pages/javascript_datatypes/javascript_datatypes.html");
export const javascriptDatatypesPage = renderPage(javascriptDatatypes, {
  tabTitle: "JavaScript Datatyper"
});

const nodeJS = readPage("./public/pages/node.js/node.js.html");
export const nodeJSPage = renderPage(nodeJS, {
  tabTitle: "Node.JS",
  CSSLink: '<link rel="stylesheet" href="/pages/node.js/node.js.css">',
  JavascriptScript: '<script src="/pages/node.js/node.js.js"></script>'
});

const typeCoercion = readPage("./public/pages/type_coercion/type_coercion.html");
export const typeCoercionPage = renderPage(typeCoercion, {
  tabTitle: "Type Coercion"
});

const restApiDesign = readPage("./public/pages/rest_api_design/rest_api_design.html");
export const restApiDesignPage = renderPage(restApiDesign , {
  tabTitle: "REST API Design",
  CSSLink: '<link rel="stylesheet" href="/pages/rest_api_design/rest_api_design.css">'
});

const javascriptScoping = readPage("./public/pages/javascript_scoping/javascript_scoping.html");
export const javascriptScopingPage = renderPage(javascriptScoping, {
  tabTitle: "JavaScript Scoping"
});

const javascriptFunction = readPage("./public/pages/javascript_function/javascript_function.html");
export const javascriptFunctionPage = renderPage(javascriptFunction, {
  tabTitle: "JavaScript Function"
});

const packageJson = readPage("./public/pages/package.json/package.json.html");
export const packageJsonPage = renderPage(packageJson, {
  tabTitle: "Package Json",
  CSSLink: '<link rel="stylesheet" href="/pages/package.json/package.json.css">'
});

const express = readPage("./public/pages/express/express.html");
export const expressPage = renderPage(express, {
  tabTitle: "Express"
});