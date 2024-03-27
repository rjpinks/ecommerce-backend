import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from "./config/connection";
import "./models/index";
import routes from "./controllers";
import cors from "cors";

// Initializing dotenv and express
dotenv.config()
const app = express();
app.use(cors<Request>());
const port = process.env.PORT! || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Starts the app
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
});
