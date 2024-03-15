import express from "express";

const app = express();

app.use(express.static("public"));

import home from "./routers/home.js";
app.use(home);

import week1 from "./routers/week1.js";
app.use(week1);

import week2 from "./routers/week2.js";
app.use(week2);

import week3 from "./routers/week3.js";
app.use(week3);

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));