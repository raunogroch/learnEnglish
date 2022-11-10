import express from "express";
import {
  findByWord,
  getAll,
  getRandom,
  verifyResponse,
} from "../controllers/dictionary.controllers.js";
let dictionayRoutes = express.Router();

const vocabulary = [];

dictionayRoutes.get("/dictionary", getAll);
dictionayRoutes.get("/dictionary/rand", getRandom);
dictionayRoutes.post("/dictionary", verifyResponse);
dictionayRoutes.get("/dictionary/:word", findByWord);

export default dictionayRoutes;
