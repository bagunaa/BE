import { db } from "../../db.js";

export const createRecord = async (req, res) => {
  const { name, user_id, amount, description, category_id } = req.body;
  //   console.log(email, name, password, avatar_img, currency_type, "body");
  const QueryText = `
      INSERT INTO records (name, user_id, amount, description, category_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(QueryText, [
      name,
      user_id,
      amount,
      description,
      category_id,
    ]);
    // console.log(name, "name");
  } catch (error) {
    console.error(error);
  }

  res.send("Record inserted");
};
export const getRecord = async (req, res) => {
  const tableQueryText = `SELECT * from records`;

  try {
    const records = await db.query(tableQueryText);
    res.send(records.rows);
  } catch (error) {
    console.error(error);
  }

  res.send("Select All Users");
};

export const editRecord = async (req, res) => {
  const { id } = req.params;
  const { name, amount } = req.body;
  try {
    const result = await db.query(
      "UPDATE users SET name = $1, amount = $2 WHERE id = $3 RETURNING *",
      [name, amount, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM users WHERE id=$1", [id]);
    res.send("Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Record deleted" });
  }
};
