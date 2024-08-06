import { createUserTable } from "../controller/table.js";
import { createRecordTable } from "../controller/table.js";
import { createCategoryTable } from "../controller/table.js";
import express from "express";

const table = express.Router();

table
  .get("/user", createUserTable)
  .get("/record", createRecordTable)
  .get("/category", createCategoryTable);

export { table };
