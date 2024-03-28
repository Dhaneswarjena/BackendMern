import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/route.js";
const app = express();
dotenv.config();
const run = async () => {
  const valconect = await mongoose.connect(process.env.MONGODB_URI);
  if (valconect) {
    console.log("Connected to myDB");
  }
};

run().catch((err) => console.error(err));

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.json([{ name: "Dhaneswarjena" }]);
});
app.use(route);
app.listen(PORT, () => {
  console.log(`server working on ${PORT}`);
});
