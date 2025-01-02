import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "../../config/firebase-app.mjs";

export const allArticle = async (req, res) => {
    try {
        const articles = collection(db, 'articles');
        const articleSnapshot = await getDocs(articles);
        const articleList = articleSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return res.status(200).json({
            status: "success",
            message: "ok",
            data: {
                articles: articleList
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
};