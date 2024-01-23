import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

const app = express();
app.use(express.json())



mongoose
  .connect("mongodb+srv://seansmith089:UJqQT8Jzoaf18L8s@mern-blog.tuxcsjt.mongodb.net/mern-blog?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => console.log("Server Running"));

app.use("/api/user", userRoutes )
app.use("/api/auth", authRoutes )

