import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    username: process.env.MONGODB_DEV_USER,
    password: process.env.MONGODB_DEV_PASS,
    database: process.env.MONGODB_DEV_DATABASE,
  },
  test: {
    username: process.env.MONGODB_DEV_USER,
    password: process.env.MONGODB_DEV_PASS,
    database: process.env.MONGODB_DEV_DATABASE,
  },
  production: {
    username: process.env.MONGODB_DEV_USER,
    password: process.env.MONGODB_DEV_PASS,
    database: process.env.MONGODB_DEV_DATABASE,
  },
};

export default process.env.NODE_ENV === 'TEST' ?  config.development :  config.test ;



