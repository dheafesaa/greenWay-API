import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config/firebase-app.mjs";

export const allReview = async (req, res) => {
  try {
    const reviews = collection(db, "reviews");
    const reviewSnapshot = await getDocs(reviews);
    const reviewList = reviewSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.status(200).json({
      status: "success",
      message: "ok",
      data: {
        reviews: reviewList,
      },
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
