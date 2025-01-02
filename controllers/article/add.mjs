import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from "../../config/firebase-app.mjs"; 

export const addArticle = async (req, res) => {
    const { title, picture, link } = req.body;

    if (!title || !picture || !link) {
        return res.status(400).json({ error: "title, picture, and link are required." });
    }

    try {
        const addArticle = await addDoc(collection(db, "articles"), {
            title: title,
            picture: picture,
            link: link
        });
        return res.status(200).json({
            status: "success",
            message: "ok",
            data: {
                article: {
                    id: addArticle.id,
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
};
