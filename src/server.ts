import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(4020, () => {
  console.log("Server is up and running on port 4020");
});
