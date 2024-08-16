import { db } from "../../db.js";

export const createUserTable = async (req, res) => {
  const tableQueryText = `
        CREATE TABLE users ( 
          id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          email VARCHAR(50) UNIQUE NOT NULL,
          name VARCHAR(255) NOT NULL,
          password TEXT,
          avatar_img TEXT,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          currency_type mood DEFAULT 'EUR' NOT NULL)`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("Created Table Succesful");
};

export const createRecordTable = async (req, res) => {
  const tableQueryText = `CREATE TABLE records (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id TEXT,
      name VARCHAR(255) NOT NULL,
      amount TEXT,
      description TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_id TEXT,
      transaction_type mood DEFAULT 'DEPOSIT' NOT NULL)`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }

  res.send("Record Table Succesful");
};

export const createCategoryTable = async (req, res) => {
  const tableQueryText = `CREATE TABLE category (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(100) NOT NULL,
      description TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_image TEXT)`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }

  res.send("Category Table Succesful");
};
