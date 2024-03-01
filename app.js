import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/gitTerminals", (req, res) => {
  res.sendFile(path.resolve("public/pages/git_terminal/git_terminal.html"));
});

app.get("/javascriptDatatypes", (req, res) => {
  res.sendFile(path.resolve("public/pages/javascript_datatypes/javascript_datatypes.html"));
});

app.get("/nodejs", (req, res) => {
  res.sendFile(path.resolve("public/pages/node.js/node.js.html"));
});

app.get("/typeCoercions", (req, res) => {
  res.sendFile(path.resolve("public/pages/type_coercion/type_coercion.html"));
});

app.get("/restApiDesigns", (req, res) => {
  res.sendFile(path.resolve("public/pages/type_coercion/type_coercion.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));