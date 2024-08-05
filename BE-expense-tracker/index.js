import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { users } from "./src/router/users.js";
import { table } from "./src/router/table.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/users", users);
app.use("/table", table);

// app.post("/users/create", async (req, res) => {
//   const { name, email, password, avatar_img, currency_type } = req.body;
//   // console.log(email, name, password, avatar_img, currency_type, "body");
//   const QueryText = `
//   INSERT INTO items (name, email, password, avatar_img, currency_type)
//   VALUES ($1, $2, $3, $4, $5) RETURNING *`;

//   try {
//     const result = await db.query(QueryText, [
//       name,
//       email,
//       password,
//       avatar_img,
//       currency_type,
//     ]);
//   } catch (error) {
//     console.error(error);
//   }

//   res.send("user inserted successfully");
// });

// app.get("/users", async (req, res) => {
//   const tableQueryText = `SELECT * from items`;

//   try {
//     const users = await db.query(tableQueryText);
//     res.send(users.rows);
//   } catch (error) {
//     console.error(error);
//   }

//   res.send("Select All Users");
// });

// app.put("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   try {
//     const result = await db.query(
//       "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
//       [name, email, id]
//     );
//     if (result.rows.length === 0) {
//       res.status(404).json({ error: "Item not found" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await db.query("DELETE FROM users WHERE id=$1", [id]);
//     res.send("Deleted");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "User deleted" });
//   }
// });

app.listen(port, () => {
  console.log(`My backend app listening on port ${port}`);
});

// app.get("/user", async (req, res) => {
//   const tableQueryText = `CREATE TABLE record (
//     id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
//     user_id TEXT,
//     name VARCHAR(255) NOT NULL,
//     amount TEXT,
//     transaction_type mood DEFAULT 'DEPOSIT' NOT NULL,
//     description TEXT,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     category_id TEXT
//     )`;

//   try {
//     await db.query(tableQueryText);
//   } catch (error) {
//     console.error(error);
//   }

//   res.send("Record Table Succesful");
// });
// app.post("/users/create", async (req, res) => {
//   const { id, user_id, name, amount, transaction_type, description } = req.body;
//   const QueryText = `
//   INSERT INTO record (id, user_id, name, amount, transaction_type, description)
//   VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

//   try {
//     const result = await db.query(QueryText, [
//       id,
//       user_id,
//       name,
//       amount,
//       transaction_type,
//       description,
//     ]);
//   } catch (error) {
//     console.error(error);
//   }

//   res.send("user inserted successfully");
// });
