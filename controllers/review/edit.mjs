import { doc, updateDoc } from "firebase/firestore/lite";

export const updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const { name, review, photo, occupation } = req.body;

  if (!name || !review || !photo || !occupation) {
    return res
      .status(400)
      .json({ error: "name, review, photo and occupation are required." });
  }

  try {
    const reviewRef = doc(db, "reviews", reviewId);
    await updateDoc(reviewRef, {
      name,
      review,
      photo,
      occupation,
    });
    return res.status(200).json({
      status: "success",
      message: "ok",
      data: {
        review: {
          id: reviewId,
          name,
          review,
          photo,
          occupation,
        },
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
