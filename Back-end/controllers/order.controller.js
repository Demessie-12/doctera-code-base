import Order from "../models/order.model.js";

export const CreateOrder = async (req, res) => {
  try {
    const {
      customerID,
      products,
      totalPrice,
      dateOfDelivery,
      status,
      address,
      ipLocation,
      reviews,
    } = req.body;

    const NumberOfOrders = await Order.find();

    const newOrder = await new Order({
      orderId: 11000 + NumberOfOrders.length,
      customerID,
      products,
      totalPrice,
      dateOfDelivery,
      status,
      address,
      ipLocation,
      reviews,
    });

    newOrder.save();

    res.status(400).json({ data: newOrder });
  } catch (error) {
    console.log("Error in CreateOrder order.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GetSingleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const singleOrder = await Order.findOne({ orderId }).select([
      "-address",
      "-ipLocation",
    ]);

    if (!singleOrder)
      return res
        .status(404)
        .json({ error: `NO Order found with ${orderId} Id` });

    res.status(200).json({ data: singleOrder });
  } catch (error) {
    console.log("Error in GetSingleOrder order.contoller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
