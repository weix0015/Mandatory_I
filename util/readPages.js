import { renderPage, readPage } from "./templatingEngine.js";

const home = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(home, {
  tabTitle: "Mandatory_I",
  CSSLink: '<link rel="stylesheet" href="/pages/homepage/homepage.css">',
  JavascriptScript: '<script src="/pages/homepage/homepage.js"></script>'
});

// all pages to 02-02/2024
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
export const restApiDesignPage = renderPage(restApiDesign, {
  tabTitle: "REST API Design",
  CSSLink: '<link rel="stylesheet" href="/pages/rest_api_design/rest_api_design.css">'
});

// all pages to 09-02/2024
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
  tabTitle: "Package JSON",
  CSSLink: '<link rel="stylesheet" href="/pages/package.json/package.json.css">'
});

const express = readPage("./public/pages/express/express.html");
export const expressPage = renderPage(express, {
  tabTitle: "Express"
});

const nodeModules = readPage("./public/pages/node_modules/node_modules.html");
export const nodeModulesPage = renderPage(nodeModules, {
  tabTitle: "Node Modules",
  CSSLink: '<link rel="stylesheet" href="/pages/node_modules/node_modules.css">'
});

// all pages to 16-02/2024
const nodemon = readPage("./public/pages/nodemon/nodemon.html");
export const nodemonPage = renderPage(nodemon, {
  tabTitle: "Nodemon",
  CSSLink: '<link rel="stylesheet" href="/pages/nodemon/nodemon.css">',
  JavascriptScript: '<script src="/pages/nodemon/nodemon.js"></script>'
});

const loopMethods = readPage("./public/pages/loop_methods/loop_methods.html");
export const loopMethodsPage = renderPage(loopMethods, {
  tabTitle: "Loop Methods"
});

const url = readPage("./public/pages/url/url.html");
export const urlPage = renderPage(url, {
  tabTitle: "URL"
});

const postRequest = readPage("./public/pages/post_request/post_request.html");
export const postRequestPage = renderPage(postRequest, {
  tabTitle: "POST Request"
});

const bodyParsing = readPage("./public/pages/body_parsing/body_parsing.html");
export const bodyParsingPage = renderPage(bodyParsing, {
  tabTitle: "Body Parsing",
  CSSLink: '<link rel="stylesheet" href="/pages/body_parsing/body_parsing.css">'
});

// all pages to 23-02/2024
const crudableRestApi = readPage("./public/pages/crudable_rest_api/crudable_rest_api.html");
export const crudableRestApiPage = renderPage(crudableRestApi, {
  tabTitle: "CRUDable Rest API"
});

const javascriptDate = readPage("./public/pages/javascript_date/javascript_date.html");
export const javascriptDatePage = renderPage(javascriptDate, {
  tabTitle: "JavaScript Date"
});

const fetchMethod = readPage("./public/pages/fetch_method/fetch_method.html");
export const fetchMethodPage = renderPage(fetchMethod, {
  tabTitle: "Fetch Method"
});

// all pages to 01-03/2024
const importExportHtml = readPage("./public/pages/import_export_html/import_export_html.html");
export const importExportHtmlPage = renderPage(importExportHtml, {
  tabTitle: "Import / Export HTML"
});

const importExportNodejs = readPage("./public/pages/import_export_node.js/import_export_node.js.html");
export const importExportNodeJSPage = renderPage(importExportNodejs, {
  tabTitle: "Import / Export Node.JS"
});

const staticFiles = readPage("./public/pages/static_files/static_files.html");
export const staticFilesPage = renderPage(staticFiles, {
  tabTitle: "Static Files"
});