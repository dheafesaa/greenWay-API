import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore/lite';
import { auth, db } from "../../config/firebase-app.mjs";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const formattedName = name.replace(/\s+/g, '+');
    const photoURL = `https://ui-avatars.com/api/?name=${formattedName}&background=random`;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please provide name, email, and password" });
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            displayName: name,
            photoURL: photoURL,
            createdAt: new Date(),
        });
        return res.status(200).json({
            status: "success",
            message: "User created",
            data: {
                user: {
                    id: user.uid,
                    name: name,
                    email: user.email,
                    photo: photoURL
                }
            }
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Register error:", errorCode, errorMessage);
        return res.status(401).json({ 
            status: "failed",
            message: "Try again",
            error: errorMessage 
        });
    }
}
