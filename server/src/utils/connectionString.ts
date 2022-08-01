const development: string = 'mongodb://localhost:27017/dark-souls-calc-db';

const connectionString: string =
  process.env.NODE_ENV ===
  'production' /* checks starting env variable in package.json*/
    ? process.env.DB_PROD_URL || development /* if prod isn't found run in dev*/
    : development;

export default connectionString;
