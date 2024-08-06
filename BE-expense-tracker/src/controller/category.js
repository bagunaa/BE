import { db } from "../../db.js";

export const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;

  const QueryText = `
      INSERT INTO category (name, description, category_image)
      VALUES ($1, $2, $3) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      name,
      description,
      category_image,
    ]);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};
export const getCategory = async (req, res) => {
  const tableQueryText = `SELECT * FROM category`;

  try {
    const category = await db.query(tableQueryText);
    console.log(category, "users");
    res.send(category.rows);
    res.end();
  } catch (error) {
    console.error(error);
    res.send("db error");
  }
};

export const editCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const result = await db.query(
      "UPDATE category SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM category WHERE id=$1", [id]);
    res.send("Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Category deleted" });
  }
};
