import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { users } from "./src/router/users.js";
import { table } from "./src/router/table.js";
import { record } from "./src/router/record.js";
import { category } from "./src/router/category.js";
// import { auth } from "./src/router/auth.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/users", users);
app.use("/table", table);
app.use("/records", record);
app.use("/category", category);
// app.use("/api", auth);

app.listen(port, () => {
  console.log(`My backend app listening on port ${port}`);
});
