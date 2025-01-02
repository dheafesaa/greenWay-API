import { doc, updateDoc } from 'firebase/firestore/lite';
import { db } from "../../config/firebase-app.mjs";

export const editArticle = async (req, res) => {
    const articleId = req.params.id;
    const { title, picture, link } = req.body;

    if (!title || !picture || !link) {
        return res.status(400).json({ error: "title, picture, and link are required." });
    }

    try {
        const articleRef = doc(db, "articles", articleId);
        await updateDoc(articleRef, {
            title, 
            picture, 
            link
        });
        return res.status(200).json({
            status: "success",
            message: "ok",
            data: {
                article: {
                    id: articleId,
                    title,
                    picture,
                    link
                }
            }
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
}
