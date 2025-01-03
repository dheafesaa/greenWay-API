import express, { json } from "express";
import cors from 'cors';
import { initializeFirebaseAdmin } from "./config/firebase-admin.mjs";
import { register } from "./controllers/authentication/register.mjs";
import { login } from "./controllers/authentication/login.mjs";
import { logout } from "./controllers/authentication/logout.mjs";
import { authMiddleware } from "./middleware/auth-middleware.mjs";
import { allArticle } from "./controllers/article/list.mjs";
import { addArticle } from "./controllers/article/add.mjs";
import { deleteArticle } from "./controllers/article/delete.mjs";
import { editArticle } from "./controllers/article/edit.mjs";
import { allReview } from "./controllers/review/list.mjs";

const app = express();
app.use(json());
app.use(cors());

app.get('/', async (req, res) => {
  return res.status(200).json({
      status: "success"
  })
})

// Initialize Firebase Admin SDK
initializeFirebaseAdmin();

// Define routes for authentication 
app.post("/register", register)
app.post("/login", login)
app.post("/logout", logout);

// Define routes for articles
app.get("/articles", allArticle)
app.post("/article", authMiddleware,addArticle);
app.delete("/article", authMiddleware, deleteArticle)
app.put("/article", authMiddleware, editArticle)

// Define routes for articles
app.get("/reviews", allReview)

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
