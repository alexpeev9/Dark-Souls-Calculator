const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDb = require('./configs/connectDbConfig');
const corsOptions = require('./configs/corsOptionsConfig');
const logger = require('./middlewares/loggerMiddleware');
const credentials = require('./middlewares/credentialsMiddleware');
const { port } = require('./utils/envParams');
app.use(credentials);
app.use(cors(corsOptions));
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use('/api', require('./routes'));
app.all('*', (req, res) => res.status(404).json({ error: '404 Not Found' }));
connectDb()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => {
    console.log('Cannot connect to database.', err);
  });
