import { Router } from "express";
import { javascriptScopingPage, javascriptFunctionPage,
  packageJsonPage, expressPage, nodeModulesPage, } from "../util/readPages.js";

const router = Router();

router.get("/javascriptScopings", (req, res) => {
  res.send(javascriptScopingPage);
});

router.get("/javascriptFunctions", (req, res) => {
  res.send(javascriptFunctionPage);
});

router.get("/packagejsons", (req, res) => {
  res.send(packageJsonPage);
});

router.get("/express", (req, res) => {
  res.send(expressPage);
});

router.get("/nodeModules", (req, res) => {
  res.send(nodeModulesPage);
});

export default router;