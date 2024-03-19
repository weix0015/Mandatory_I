import { Router } from "express";
import { importExportHtmlPage } from "../util/readPages.js";

const router = Router();

router.get("/importExportHtmls", (req, res) => {
  res.send(importExportHtmlPage);
});

export default router;