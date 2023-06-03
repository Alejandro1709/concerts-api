import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.NODE_ENV;
export const MONGO_URI_DEV = process.env.MONGO_URI_DEV;
export const MONGO_URI_PROD = process.env.MONGO_URI_PROD;
export const PORT = process.env.PORT || 4020;
