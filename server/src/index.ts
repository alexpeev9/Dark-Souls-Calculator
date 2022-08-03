import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import credentialsMiddleware from './middlewares/credentialsMiddleware';
import mongoose from 'mongoose';
import corsOptionsConfig from './configs/corsOptionsConfig';
import loggerMiddleware from './middlewares/loggerMiddleware';
import router from './routes';
import env from './env';

const app: Express = express();
app.use(credentialsMiddleware);
app.use(cors(corsOptionsConfig));
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

mongoose
  .connect(env.connectionString)
  .then(() =>
    app.listen(env.port, () =>
      console.log(`Server is running on port ${env.port}`)
    )
  )
  .catch((err) => {
    console.log('Cannot connect to database.', err);
  });
