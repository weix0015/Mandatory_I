import { Router } from "express";
import { homepagePage } from "../util/readPages.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(homepagePage);
});

export default router;