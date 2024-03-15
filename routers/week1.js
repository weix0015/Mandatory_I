import { Router } from "express"
import { gitTerminalPage, javascriptDatatypesPage,
  nodeJSPage, typeCoercionPage,
  restApiDesignPage} from "../util/readPages.js";

const router = Router();

router.get("/gitTerminals", (req, res) => {
  res.send(gitTerminalPage);
});

router.get("/javascriptDatatypes", (req, res) => {
  res.send(javascriptDatatypesPage);
});

router.get("/nodejs", (req, res) => {
  res.send(nodeJSPage);
});

router.get("/typeCoercions", (req, res) => {
  res.send(typeCoercionPage);
});

router.get("/restApiDesigns", (req, res) => {
  res.send(restApiDesignPage);
});

router.get("/restApiDesigns", (req, res) => {
  res.send(restApiDesignPage);
});

export default router;