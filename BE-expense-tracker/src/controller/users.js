import { db } from "../../db.js";

export const createUser = async (req, res) => {
  const { name, email, password, avatar_img, currency_type } = req.body;
  // console.log(email, name, password, avatar_img, currency_type, "body");
  const QueryText = `
      INSERT INTO users (name, email, password, avatar_img, currency_type)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      name,
      email,
      password,
      avatar_img,
      currency_type,
    ]);
  } catch (error) {
    console.error(error);
  }

  res.send("user inserted successfully");
};
export const getUser = async (req, res) => {
  const tableQueryText = `SELECT * from items`;

  try {
    const users = await db.query(tableQueryText);
    res.send(users.rows);
  } catch (error) {
    console.error(error);
  }

  res.send("Select All Users");
};

export const editUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const result = await db.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM users WHERE id=$1", [id]);
    res.send("Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "User deleted" });
  }
};
