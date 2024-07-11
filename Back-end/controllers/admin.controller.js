import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const GetAllUsers = async (req, res) => {
  try {
    const Users = await User.find().select("-password");
    res.status(200).json({ data: Users });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in GetAllUsers admin.controller", error.message);
  }
};

export const GetUsersByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const categoryUser = await User.find({ role: category }).select(
      "-password"
    );

    if (!categoryUser)
      return res
        .status(404)
        .json({ error: `NO user found in ${category} category` });

    res.status(200).json({ data: categoryUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in GetUsersByCategory admin.controller", error.message);
  }
};

export const GetSingleUser = async (req, res) => {
  try {
    const { username } = req.params;

    const selectedUser = await User.findOne({ username }).select("-password");

    if (!selectedUser)
      return res.status(404).json({ error: "No user found in this username" });

    res.status(200).json({ data: selectedUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in GetSingleUser admin.controller", error.message);
  }
};

export const GetProductByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const products = await Product.find({ status });

    if (!products)
      return res.status(404).json({ error: "NO product found in this status" });
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in GetProductByStatus admin.controller", error.message);
  }
};

export const EditProductStatus = async (req, res) => {
  try {
    const { productId } = req.params;
    const selectedProduct = await Product.findOne({ productId: productId });

    const product = await Product.findByIdAndUpdate(
      selectedProduct._id,
      {
        status: selectedProduct.status === "Verified" ? "Pending" : "Verified",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: `${product.name} become ${product.status}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in EditProductStatus admin.controller", error.message);
  }
};

export const GetAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();

    res.status(200).json({ data: allOrders });
  } catch (error) {
    console.log("Error in GetAllOrders admin.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const EditOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const selectedOrder = await Order.findOne({ orderId });

    if (!selectedOrder)
      return res
        .staus(404)
        .json({ error: `NO order found with ${orderId} Id` });
    const updatedOrder = await Order.findByIdAndUpdate(
      selectedOrder._id,
      {
        status,
      },
      {
        new: true,
      }
    );

    res.status(200).json({ data: updatedOrder });
  } catch (error) {
    console.log("Error in GetAllOrders admin.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
