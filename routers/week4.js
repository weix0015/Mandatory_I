import { Router } from "express";
import { crudableRestApiPage } from "../util/readPages.js";

const router = Router();

router.get("/crudableRestApis", (req, res) => {
  res.send(crudableRestApiPage);
});

export default router;