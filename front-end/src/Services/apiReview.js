import toast from "react-hot-toast";
import { GetAllProducts } from "./apiProducts";

export const CreateReviewHook = async (reviewData) => {
  try {
    const res = await fetch("https://api1.docteramarket.com/api/reviews/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...reviewData }),
      credentials: "include",
    });

    const CreateReviewdata = await res.json();

    if (CreateReviewdata.error) {
      throw new Error(CreateReviewdata.error);
    }
    const { data } = CreateReviewdata;
    toast.success("Review Created successfully");

    await fetch("https://api1.docteramarket.com/api/reviews", {
      credentials: "include",
    });
    await GetAllProducts();
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
