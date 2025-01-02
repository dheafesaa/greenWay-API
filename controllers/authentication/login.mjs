import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore/lite';
import { auth, db } from "../../config/firebase-app.mjs";

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please provide email and password" });
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        const accessToken = user.stsTokenManager.accessToken;
        const id = user.uid;
        const userRef = doc(db, 'users', id);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return res.status(404).json({ error: "User not found." });
        }
        const userData = userDoc.data();
        const photoURL = userData.photoURL;

        return res.status(200).json({
            status: "success",
            message: "ok",
            data: {
                id: id,
                name: user.displayName,
                photo: photoURL,
                token: accessToken
            }
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        return res.status(401).json({ 
            status: "failed",
            message: "Invalid credential",
            error: errorMessage 
        });
    }
}