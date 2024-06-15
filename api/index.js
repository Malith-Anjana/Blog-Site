import express from "express"
import postRoutes from "./routes/post.js"
import userRoutes from "./routes/post.js"
import authRoutes from "./routes/post.js"
const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.listen(8800, ()=> {
    console.log("Connected!")
})