import express from "express";
import morgan from "morgan";
import groupRoutes from "./routes/group.routes";
import concertRoutes from "./routes/concert.routes";
import { ENV, PORT } from "./config/secrets";
import { errorHandler, notFound } from "./middlewares/error.middleware";
import { connectDb } from "./config/db";
import type { Request, Response } from "express";

const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/groups", groupRoutes);
app.use("/api/v1/concerts", concertRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
