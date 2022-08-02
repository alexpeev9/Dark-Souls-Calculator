import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import credentialsMiddleware from './middlewares/credentialsMiddleware';
import mongoose from 'mongoose';
import connectionString from './utils/connectionString';
import corsOptionsConfig from './configs/corsOptionsConfig';
import loggerMiddleware from './middlewares/loggerMiddleware';

dotenv.config();
const port = process.env.PORT || 5000;

const app: Express = express();
app.use(credentialsMiddleware);
app.use(cors(corsOptionsConfig));
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// TODO: app.use('/api', require('./routes'));
app.all('*', (req: Request, res: Response) =>
  res.status(404).json({ error: '404 Not Found' })
);

mongoose
  .connect(connectionString)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((err) => {
    console.log('Cannot connect to database.', err);
  });
