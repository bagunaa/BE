import express from "express";
import {
  createRecord,
  deleteRecord,
  editRecord,
  getRecord,
} from "../controller/record.js";

const record = express.Router();

record
  .get("/", getRecord)
  .post("/create", createRecord)
  .put("/edit", editRecord)
  .delete("/:id", deleteRecord);

export { record };
