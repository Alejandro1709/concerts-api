import { MongoClient } from "mongodb";
import { ENV, MONGO_URI_DEV, MONGO_URI_PROD } from "./secrets";

const MONGO_URI = (
  ENV === "development" ? MONGO_URI_DEV : MONGO_URI_PROD
) as string;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();

export const connect = async () => {
  await client.connect();
  console.log("Connected to MongoDB!");
};
