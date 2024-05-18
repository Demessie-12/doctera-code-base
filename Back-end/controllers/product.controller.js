import Product from "../models/product.model.js";

export const GetAllProducts = async (req, res) => {
  try {
    console.log("Get all Products");
    const Products = await Product.find();

    res.status(200).json({
      data: Products,
    });
  } catch (error) {
    console.log("Error in GetAllProducts controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const GetProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const categoryProducts = await Product.find({
      category: category,
    });
    if (!categoryProducts)
      return res
        .status(404)
        .json({ message: `No product found in ${category} category` });

    res.status(200).json({ data: categoryProducts });
  } catch (error) {
    console.log(
      "Error in GetProductByCategory product.contoller",
      error.message
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GetSingleProduct = async (req, res) => {
  try {
    const { ProductID } = req.params;
    const SingleProduct = await Product.findOne({ productId: ProductID });
    if (!SingleProduct)
      return res
        .status(404)
        .json({ message: `NO Product found with ${ProductID} ID` });

    res.status(200).json({ data: SingleProduct });
  } catch (error) {
    console.log("Error in GetSingleProduct product.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const PostProduct = async (req, res) => {
  try {
    const {
      productId,
      name,
      category,
      description,
      detail,
      condition,
      newPrice,
      coverImage,
      tags,
    } = req.body;

    const ExistedProductID = await Product.findOne({ productId });
    if (ExistedProductID) {
      return res
        .status(400)
        .json({ error: "ProductId already used for other product" });
    }
    const ExistedProductName = await Product.findOne({ name });
    if (ExistedProductName) {
      return res
        .status(400)
        .json({ error: "Product name already used for other product" });
    }

    const newProduct = new Product({
      productId,
      name,
      category,
      description,
      detail,
      condition,
      newPrice,
      coverImage,
      tags,
    });

    await newProduct.save();

    res.status(201).json({
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in PostProduct product.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const EditProduct = async (req, res) => {
  try {
    const { ProductID } = req.params;
    const selectedProduct = await Product.findOne({ productId: ProductID });
    if (!selectedProduct)
      return res
        .status(404)
        .json({ message: `NO Product found with ${ProductID} ID` });

    const {
      productId,
      name,
      category,
      description,
      detail,
      condition,
      newPrice,
      coverImage,
      tags,
    } = req.body;

    const ExistedProductID = await Product.findOne({
      productId,
      _id: { $ne: selectedProduct._id },
    });
    if (ExistedProductID) {
      return res
        .status(400)
        .json({ error: "ProductId already used for other product" });
    }
    const ExistedProductName = await Product.findOne({
      name,
      _id: { $ne: selectedProduct._id },
    });
    if (ExistedProductName) {
      return res
        .status(400)
        .json({ error: "Product name already used for other product" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      selectedProduct._id,
      {
        productId: productId || selectedProduct.productId,
        name: name || selectedProduct.name,
        category: category || selectedProduct.category,
        description: description || selectedProduct.description,
        detail: detail || selectedProduct.detail,
        condition: condition || selectedProduct.condition,
        newPrice: newPrice || selectedProduct.newPrice,
        coverImage: coverImage || selectedProduct.coverImage,
        tags: tags || selectedProduct.tags,
      }
    );

    // await updatedProduct.save();
    res.status(200).json({ data: updatedProduct });
  } catch (error) {
    console.log("Error in EditProduct product.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const { ProductID } = req.params;
    const selectedProduct = await Product.findOne({ productId: ProductID });
    const deleted = await Product.findByIdAndDelete(selectedProduct._id);
    if (!deleted)
      return res.status(200).json({ message: "Can't found any product" });
    res.status(200).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log("Error in DeleteProduct product.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
