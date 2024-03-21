import { Router } from "express";
import {
  importExportHtmlPage, importExportNodeJSPage,
  staticFilesPage, structureFrontendPage
} from "../util/readPages.js";

const router = Router();

router.get("/importExportHtmls", (req, res) => {
  res.send(importExportHtmlPage);
});

router.get("/importExportNodejs", (req, res) => {
  res.send(importExportNodeJSPage);
});

router.get("/staticFiles", (req, res) => {
  res.send(staticFilesPage);
});

router.get("/structureFrontends", (req, res) => {
  res.send(structureFrontendPage);
});

export default router;