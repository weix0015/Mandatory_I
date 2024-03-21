import { Router } from "express";
import {
  crudableRestApiPage, javascriptDatePage,
  fetchMethodPage
} from "../util/readPages.js";

const router = Router();

router.get("/crudableRestApis", (req, res) => {
  res.send(crudableRestApiPage);
});

router.get("/javascriptDates", (req, res) => {
  res.send(javascriptDatePage);
});

router.get("/fetchMethods", (req, res) => {
  res.send(fetchMethodPage);
});

export default router;