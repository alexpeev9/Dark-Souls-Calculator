import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import path from 'path';

import credentialsMiddleware from './middlewares/credentialsMiddleware';
import corsOptionsConfig from './configs/corsOptionsConfig';
import loggerMiddleware from './middlewares/loggerMiddleware';
import router from './routes';
import env from './env';

const app = express();
app.use(credentialsMiddleware);
app.use(cors(corsOptionsConfig));
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

if (env.isInProduction) {
  app.use(express.static(path.join(__dirname, '../../', '/client/build/')));
}

app.use('/', router);

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
