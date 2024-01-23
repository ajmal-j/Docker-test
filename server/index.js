import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "app is running on docker container" });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
