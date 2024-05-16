import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
// import cors from "cors";

const port = 5000;
const app = express();
// app.use(cors());

app.get("/", (req, res) => {
  res.send("BACKEND" + process.env.NODE_ENV);
});

app.listen(port, () => {
  console.log(`Now listening on porst ${port}`);
});
