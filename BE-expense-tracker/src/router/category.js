import express from "express";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../controller/category.js";

const category = express.Router();

category
  .get("/", getCategory)
  .post("/create", createCategory)
  .put("/edit", editCategory)
  .delete("/:id", deleteCategory);

export { category };
