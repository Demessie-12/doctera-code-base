import toast from "react-hot-toast";

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
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
