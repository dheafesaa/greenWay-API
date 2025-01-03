import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../config/firebase-app.mjs";

export const addReview = async (req, res) => {
  const { name, review, photo, occupation } = req.body;

  if (!name || !review || !photo || !occupation) {
    return res
      .status(400)
      .json({ error: "name, review, photo and occupation are required." });
  }

  try {
    const addReview = await addDoc(collection(db, "reviews"), {
      name: name,
      review: review,
      photo: photo,
      occupation: occupation,
    });
    return res.status(200).json({
      status: "success",
      message: "ok",
      data: {
        review: {
          id: addReview.id,
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
