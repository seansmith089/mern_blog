import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
// import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

const app = express();
app.use(express.json())
// app.use(cors)


// Connect to MongoDB and start server
mongoose
  .connect("mongodb+srv://seansmith089:UJqQT8Jzoaf18L8s@mern-blog.tuxcsjt.mongodb.net/mern-blog?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB Connected!");
    app.listen(3000, () => console.log("Server Running"))
  })
  .catch((error) => {
    console.log(error)
  });


app.use("/api/user", userRoutes )
app.use("/api/auth", authRoutes )

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success: false,
        statusCode, 
        message
    })
})