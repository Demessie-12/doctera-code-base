import React, { useContext, useState } from "react";
import { Form, useActionData, useParams } from "react-router-dom";
import { NavbarContext } from "../../context/Navbar.context";
import toast from "react-hot-toast";
import { CreateReviewHook } from "../../Services/apiReview";

function AddReview({ product }) {
  const { loggedUser } = useContext(NavbarContext);
  const { IdWithSlug } = useParams();
  const productId = IdWithSlug.slice(0, IdWithSlug.indexOf("_"));

  const [selectedStar, setSelectedStar] = useState(4);
  const handleStarSelection = (e) => {
    setSelectedStar(e.target.value);
  };
  const formErrors = useActionData();
  if (formErrors?.pleaseLogin) {
    toast.error(formErrors.pleaseLogin);
    formErrors.pleaseLogin = undefined;
  }

  return (
    <div>
      <Form
        method="POST"
        className="flex flex-col gap-0 bg-DocBlue font-semibold sm:flex-row lg:px-10"
      >
        <div className="mb-2 flex gap-2 sm:grow sm:flex-row sm:items-center lg:max-w-4xl">
          <div className="grow">
            <input
              className="input h-10 w-full rounded-b-xl bg-white pl-2 text-gray-900 md:pl-3"
              type="text"
              name="review"
              placeholder="Type your comment about this product"
              minLength="3"
              required
            />
          </div>
          <div className="my-auto mr-2 flex gap-2 align-middle sm:flex-row sm:items-center md:mr-3">
            <label className="flex text-lg text-DocOrange sm:basis-32">
              Star
            </label>
            <div className="grow">
              <select
                value={selectedStar}
                onChange={handleStarSelection}
                className="w-fit bg-transparent text-center align-middle font-semibold text-white"
              >
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <option
                    key={i}
                    className="bg-gray-600 font-semibold text-DocOrange"
                    value={star}
                  >
                    {star}
                  </option>
                ))}
              </select>
              {/* <input
                className="input hidden h-9 w-full rounded-xl bg-gray-600 pl-2"
                type="text"
                name="selctedCategory"
                defaultValue={product?.category[1]}
              /> */}
            </div>
          </div>
        </div>
        <button className="rounded-2xl bg-DocOrange px-3 py-2 font-semibold text-gray-800 md:px-4">
          Submit
        </button>
        <div>
          <input type="hidden" name="rating" value={selectedStar} />
          <input type="hidden" name="product" value={product} />
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="loggedUser" value={loggedUser} />
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);
  const errors = {};
  if (!data.loggedUser) {
    console.log("error detected");
    errors.pleaseLogin = "Please Login to give review on product.";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newReview = await CreateReviewHook(data);
  location.reload();

  console.log(newReview);

  return null;
}

export default AddReview;
