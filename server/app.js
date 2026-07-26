import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to ChatterBox Pro Backend");
});

export default app;