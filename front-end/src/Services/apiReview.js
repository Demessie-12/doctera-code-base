import toast from "react-hot-toast";
import { GetAllProducts } from "./apiProducts";

export const CreateReviewHook = async (reviewData) => {
  try {
    const res = await fetch("/api/reviews/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...reviewData }),
    });

    const CreateReviewdata = await res.json();

    if (CreateReviewdata.error) {
      throw new Error(CreateReviewdata.error);
    }
    const { data } = CreateReviewdata;
    toast.success("Review Created successfully");

    await fetch("/api/reviews");
    await GetAllProducts();
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
