import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from "./config/connection";

// Initializing dotenv and express
dotenv.config()
const app = express();
const port = process.env.PORT!;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Stand in route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

// Starts the app
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
});
