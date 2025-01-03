import { doc, deleteDoc, getDoc } from "firebase/firestore/lite";
import { db } from "../../config/firebase-app.mjs";

export const deleteReview = async (req, res) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return res.status(400).json({ error: "reviewId is required." });
  }

  try {
    const reviewRef = doc(db, "reviews", reviewId);
    const reviewDoc = await getDoc(reviewRef);
    if (!reviewDoc.exists()) {
      return res.status(404).json({ error: "Review not found." });
    }
    await deleteDoc(doc(db, "reviews", reviewId));
    return res.status(200).json({
      status: "success",
      message: "Review deleted successfully",
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return res.status(400).json({
      error: {
        errorCode,
        errorMessage,
      },
    });
  }
};
