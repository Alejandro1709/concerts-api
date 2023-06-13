import mongoose, { MongooseError } from "mongoose";
import { ENV, MONGO_URI_DEV, MONGO_URI_PROD } from "./secrets";

const MONGO_URI = (
  ENV === "development" ? MONGO_URI_DEV : MONGO_URI_PROD
) as string;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");
  } catch (err) {
    if (err instanceof MongooseError) {
      console.log(err.message);
    }
    console.log(err);
    process.exit(1);
  }
};
