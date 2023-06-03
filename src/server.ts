import express from "express";
import morgan from "morgan";
import groupRoutes from "./routes/group.routes";
import { ENV, PORT } from "./config/secrets";
import type { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/groups", groupRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});