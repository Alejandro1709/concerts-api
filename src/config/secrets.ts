import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 4020;
