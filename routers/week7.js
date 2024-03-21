import { Router } from "express";
import { linterPage, promisesPage, 
  routersPage } from "../util/readPages.js";

const router = Router();

router.get("/linters", (req, res) => {
  res.send(linterPage);
});

router.get("/promises", (req, res) => {
  res.send(promisesPage);
});

router.get("/routers", (req, res) => {
  res.send(routersPage);
});

export default router;