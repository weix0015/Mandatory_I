import { Router } from "express";
import {nodemonPage, loopMethodsPage,
  urlPage, postRequestPage } from "../util/readPages.js";

const router = Router();

router.get("/nodemons", (req, res) => {
  res.send(nodemonPage);
});

router.get("/loopMethods", (req, res) => {
  res.send(loopMethodsPage);
});

router.get("/urls", (req, res) => {
  res.send(urlPage);
});

router.get("/postRequests", (req, res) => {
  res.send(postRequestPage);
});

export default router;