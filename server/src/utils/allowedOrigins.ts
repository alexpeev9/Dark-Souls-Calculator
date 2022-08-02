const productionUrl: string = `http://localhost:${process.env.PORT || 5000}`;
const developmentUrl: string = `${process.env.PROD_URL || productionUrl}`;

const allowedOrigins = [productionUrl, developmentUrl];

export default allowedOrigins;
