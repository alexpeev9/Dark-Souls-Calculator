import allowedOrigins from '../utils/allowedOrigins';

const corsOptionsConfig = {
  // origin: (origin: any, callback: any) => {
  //   if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },

  // origin: allowedOrigins,
  origin: '*', // temporary to fix bug
  credentials: true,
  optionsSuccessStatus: 200
};

export default corsOptionsConfig;
