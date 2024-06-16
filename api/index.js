import 'dotenv/config'
import express from "express";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import fileUploadRoute from "./routes/file_upload.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/upload", fileUploadRoute);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Connected! on "+ PORT);
});
