import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-app.mjs";

export const logout = async (req, res) => {
    try {
        await signOut(auth);

        console.log("User signed out");

        return res.status(200).json({ message: "User logged out successfully" })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Logout error:", errorCode, errorMessage);
        return res.status(500).json({ 
            status: "failed",
            message: "log out failed",
            error: errorMessage });
    }
}