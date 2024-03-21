import { Router } from "express";
import { redirectionsPage, ssrVsCsrPage } from "../util/readPages.js";

const router = Router();

router.get("/redirections", (req, res) => {
  res.send(redirectionsPage);
});

router.get("/ssrVsCsrs", (req, res) => {
  res.send(ssrVsCsrPage);
});

export default router;