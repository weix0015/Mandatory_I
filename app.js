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

import week4 from "./routers/week4.js";
app.use(week4);

import week5 from "./routers/week5.js";
app.use(week5);

import week6 from "./routers/week6.js";
app.use(week6);

import week7 from "./routers/week7.js";
app.use(week7);

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));