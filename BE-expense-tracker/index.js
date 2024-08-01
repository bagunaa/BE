import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/users/createtable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE items ( 
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password TEXT,
    avatar_img BYTEA,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type mood DEFAULT 'EUR' NOT NULL)`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }

  res.send("Created Table Succesful");
});

app.post("/users/create", async (req, res) => {
  const { name, email, password, avatar_img, currency_type } = req.body;
  // console.log(email, name, password, avatar_img, currency_type, "body");
  const QueryText = `
  INSERT INTO items (name, email, password, avatar_img, currency_type)
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
});

app.get("/users", async (req, res) => {
  const tableQueryText = `SELECT * from items`;

  try {
    const users = await db.query(tableQueryText);
    res.send(users.rows);
  } catch (error) {
    console.error(error);
  }

  res.send("Select All Users");
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
});

app.listen(port, () => {
  console.log(`My backend app listening on port ${port}`);
});
