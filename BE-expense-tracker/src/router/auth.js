import { createUser, getUser } from "./user.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    await createUser(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const signIn = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await getUser(req, res);

    bcrypt.compare(password, user[0].password, (err, result) => {
      if (result) {
        res.send({ success: true, user: user });
      } else {
        res.send({ error: "Invalid email or password" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
