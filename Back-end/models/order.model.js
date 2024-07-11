import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: Number,
      required: [true, "An order must have unique ID"],
      unique: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productId: Number,
        price: Number,
        quantity: Number,
        totalPrice: Number,
      },
    ],
    totalPrice: {
      type: Number,
      requried: [true, "An order must have total price"],
    },
    dateOfDelivery: {
      type: Date,
      required: [true, "An order must have dateOfDelivery"],
    },
    status: {
      type: String,
      enum: ["Successfully delivered", "On delivery", "Waiting"],
      default: "Waiting",
    },
    address: String,
    ipLocation: [Number],
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
