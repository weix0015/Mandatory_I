import express from "express";

const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/git_terminal", (req, res) => {
  res.sendFile(path.resolve("public/pages/git_terminal/git_terminal.html"));
});

app.get("/javascript_datatypes", (req, res) => {
  res.sendFile(path.resolve("public/pages/javascript_datatypes/javascript_datatypes.html"));
});

app.get("/node.js", (req, res) => {
  res.sendFile(path.resolve("public/pages/node.js/node.js.html"));
});

app.get("/type_coercion", (req, res) => {
  res.sendFile(path.resolve("public/pages/type_coercion/type_coercion.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));