import express from "express";

const app = express();

app.use(express.static("public"));

import { homepagePage, gitTerminalPage, 
  javascriptDatatypesPage, nodeJSPage, 
  typeCoercionPage, restApiDesignPage, 
  javascriptScopingPage, javascriptFunctionPage } from "./util/readPages.js";

app.get("/", (req, res) => {
  res.send(homepagePage);
});

// all endpoints to 02-02/2024
app.get("/gitTerminals", (req, res) => {
  res.send(gitTerminalPage);
});

app.get("/javascriptDatatypes", (req, res) => {
  res.send(javascriptDatatypesPage);
});

app.get("/nodejs", (req, res) => {
  res.send(nodeJSPage);
});

app.get("/typeCoercions", (req, res) => {
  res.send(typeCoercionPage);
});

app.get("/restApiDesigns", (req, res) => {
  res.send(restApiDesignPage);
});

// all endpoints to 09-02/2024
app.get("/javascriptScopings", (req, res) => {
  res.send(javascriptScopingPage);
});

app.get("/javascriptFunctions", (req, res) => {
  res.send(javascriptFunctionPage);
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));