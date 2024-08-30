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
    customerName: {
      type: String,
      minLength: 3,
      required: [true, "An order must have defined customer"],
    },
    customerPhoneNo: {
      type: Number,
      minLength: 10,
      maxlength: 13,
      required: [true, "An order must have defined customer"],
    },
    products: [
      {
        productId: String,
        coverImage: String,
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
