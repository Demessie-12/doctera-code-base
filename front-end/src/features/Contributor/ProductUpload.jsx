import React, { useState } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";
import ImageEditor from "./ImageEditor";
import { UploadProductHook } from "../../Services/apiContributor";

function ProductUpload() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  if (formErrors?.coverImage) toast.error(formErrors.coverImage);

  const [selectedImage, setSelectedImage] = useState("");
  const [allImages, setAllImages] = useState([]);
  // console.log(allImages, selectedImage);

  // Manage Condition
  const [condition, setCondition] = useState("Brand New");
  const handleConditionChange = (value) => {
    setCondition(value);
  };

  // Manage Catagories Checkbox
  const categories = [
    "Discount",
    "Diagnostic Tools",
    "Imagings",
    "Laboratory equipments",
    "Respiratory care",
    "Supportive and physiotherapy",
    "Homecare",
    "Furnitures",
    "Popular",
  ];

  const [checkedCategories, setCheckedCategories] = useState(
    categories.map((item) => {
      return { name: item, state: false };
    }),
  );

  const handleCategoriesChange = (position) => {
    const updatedCatetoriesState = checkedCategories.map(
      ({ name, state }, index) => {
        return { name, state: index === position ? !state : state };
      },
    );

    setCheckedCategories(updatedCatetoriesState);

    // console.log(updatedCatetoriesState);
  };

  // Manage Catagory Selection
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <p className="mt-5 text-center text-xl font-semibold text-white md:text-2xl">
        <span className="text-2xl text-yellow-500 md:text-3xl">
          Welcome, 🙋‍♀️
        </span>{" "}
        <br />
        Upload your Product and{" "}
        <span className="text-yellow-500">BOOST your income!!</span>
      </p>
      <ImageEditor
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        allImages={allImages}
        setAllImages={setAllImages}
      />
      <div className="flex text-center lg:text-xl">
        <Form
          method="POST"
          className="mt-5 rounded-md bg-gray-900 p-5 font-semibold text-DocOrange lg:px-10"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Product Name</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-600 pl-2 capitalize"
                type="text"
                name="name"
                placeholder="Type your product Name"
                minLength="3"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Quantity</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-200 pl-2 text-gray-900"
                type="Number"
                name="quantity"
                min={1}
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-0 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Condition</label>
            <div className="flex w-fit">
              <label className="my-auto ml-5 mr-1 inline text-green-600 md:ml-10">
                New
              </label>
              <input
                className="input h-9 w-full rounded-xl pl-2 text-gray-900"
                type="checkbox"
                name="conditionInput"
                defaultChecked={true}
                checked={condition === "Brand New"}
                onChange={() => handleConditionChange("Brand New")}
              />
              <label className="my-auto ml-5 mr-1 w-fit text-blue-600 md:ml-10">
                Slightly Used
              </label>
              <input
                className="input h-9 w-full rounded-xl pl-2 text-gray-900"
                type="checkbox"
                name="condition"
                checked={condition === "Slightly Used"}
                onChange={() => handleConditionChange("Slightly Used")}
              />

              <label className="my-auto ml-5 mr-1 inline text-red-600 md:ml-10">
                Used
              </label>
              <input
                className="input h-9 w-full rounded-xl pl-2 text-gray-900"
                type="checkbox"
                name="condition"
                checked={condition === "Used"}
                onChange={() => handleConditionChange("Used")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-32">New Price</label>
              <div className="grow">
                <input
                  className="input h-9 w-full rounded-xl bg-gray-200 pl-2 text-gray-900"
                  type="Number"
                  name="newPrice"
                  min={20}
                  required
                />
              </div>
            </div>

            <div className="mb-5 ml-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-20">Old Price</label>
              <div className="grow">
                <input
                  className="input h-9 w-full rounded-xl bg-gray-400 pl-2 text-gray-900 line-through"
                  type="Number"
                  name="oldPrice"
                  min={20}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Description</label>
            <div className="grow">
              <textarea
                name="description"
                placeholder="Type one paragraph description about your product"
                rows={4}
                className="input h-fit w-full rounded-xl bg-gray-600 p-2"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Category</label>
            <div className="grow">
              <select
                value={selectedCategory}
                onChange={handleCategorySelection}
                className="w-fit bg-transparent text-center align-middle font-semibold text-white"
              >
                {categories.map((category, i) => (
                  <option
                    key={i}
                    className="bg-gray-600 font-semibold text-white"
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
              <input
                className="input hidden h-9 w-full rounded-xl bg-gray-600 pl-2"
                type="text"
                name="selctedCategory"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-0 pl-5 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Others</label>
            <div className="flex w-full flex-wrap gap-3">
              {categories.map((category, index) => (
                <div key={index} className="flex gap-1">
                  <label
                    className={`my-auto ml-5 mr-1 inline ${index % 2 == 0 ? "text-red-600" : "text-blue-600"} md:ml-10`}
                  >
                    {category}
                  </label>
                  <input
                    className="input h-9 w-6 rounded-xl pl-2 text-gray-900"
                    type="checkbox"
                    name="condition"
                    checked={checkedCategories[index].state}
                    onChange={() => handleCategoriesChange(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 mt-10 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-32">Detail</label>
            <div className="grow">
              <textarea
                name="detail"
                placeholder="Tell us about your product in detail. like its brand, size, function and ..."
                rows={4}
                className="input h-fit w-full rounded-xl bg-gray-600 p-2"
                required
              />
            </div>
          </div>
          <div className="mx-auto w-full">
            <button
              className={`px rounded-full bg-blue-600 px-5 py-3 font-semibold text-white ${isSubmitting ? "bg-red-700 font-bold text-yellow-500" : ""}`}
            >
              {isSubmitting ? "Uploading Please wait seconds..." : "Upload"}
            </button>
          </div>

          <div>
            <input type="hidden" name="condition" value={condition} />
            <input
              type="hidden"
              name="category"
              value={JSON.stringify(checkedCategories)}
            />
            <input
              type="hidden"
              name="images"
              value={JSON.stringify(allImages)}
            />
            <input type="hidden" name="coverImage" value={selectedImage} />
            <input type="hidden" name="mainCategory" value={selectedCategory} />
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};
  if (data.coverImage == "")
    errors.coverImage = "Please add or select Coveer Image";
  if (Object.keys(errors).length > 0) return errors;

  const productData = {
    ...data,
    quantity: Number(data.quantity),
    category: JSON.parse(data.category)
      .filter((each) => each.state)
      .map(({ name, state }) => name),
    images: JSON.parse(data.images),
    coverImage: data.coverImage,
  };

  const uploadedData = await UploadProductHook(productData);
  console.log(uploadedData);
  return null;

  return null;
}

export default ProductUpload;
