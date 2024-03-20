import { Router } from "express";
import { importExportHtmlPage, importExportNodeJSPage } from "../util/readPages.js";

const router = Router();

router.get("/importExportHtmls", (req, res) => {
  res.send(importExportHtmlPage);
});

router.get("/importExportNodejs", (req, res) => {
  res.send(importExportNodeJSPage);
});

export default router;