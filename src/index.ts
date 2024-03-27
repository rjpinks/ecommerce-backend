import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from "./config/connection";
import "./models/index";

// Initializing dotenv and express
dotenv.config()
const app = express();
const port = process.env.PORT!;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Starts the app
sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
});
