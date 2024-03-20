import { Router } from "express";
import { redirectionsPage } from "../util/readPages.js";

const router = Router();

router.get("/redirections", (req, res) => {
  res.send(redirectionsPage);
});

export default router;