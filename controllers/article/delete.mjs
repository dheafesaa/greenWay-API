import { doc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { db } from "../../config/firebase-app.mjs";

export const deleteArticle = async (req, res) => {
    const articleId = req.params.id;

    if (!articleId) {
        return res.status(400).json({ error: "ArticleId is required." });
    }

    try {
        const articleRef = doc(db, 'articles', articleId);
        const articleDoc = await getDoc(articleRef);
        if (!articleDoc.exists()) {
            return res.status(404).json({ error: "Article not found." });
        }
        await deleteDoc(doc(db, "articles", articleId));
        return res.status(200).json({
            status: "success",
            message: "Article deleted successfully",
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return res.status(400).json({
            error: {
                errorCode,
                errorMessage
            }
        });
    }
};
