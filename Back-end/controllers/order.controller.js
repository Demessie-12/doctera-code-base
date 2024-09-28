import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

export const CreateOrder = async (req, res) => {
  try {
    const { customerID, customer, phone, cart, address, position } = req.body;
    var cartPrice = [];

    const NumberOfOrders = await Order.find();
    const Products = await Product.find();
    await cart.map((CartItem, i) => {
      const SingleProduct = Products.find(
        (element) => element.productId == CartItem.productId
      );
      const productPrice = CartItem.quantity * SingleProduct.newPrice;
      cartPrice.push(productPrice);
      return productPrice;
    });

    var date = new Date();
    // add  day based on address
    const transportDate = address.includes("Addis Ababa") ? 1 : 2;
    date.setDate(date.getDate() + transportDate);

    const newOrder = await new Order({
      orderId: 11000 + NumberOfOrders.length,
      // customerID,
      customerName: customer,
      customerPhoneNo: Number(phone),
      products: cart,
      totalPrice: cartPrice.reduce((sum, item) => sum + item, 0),
      dateOfDelivery: date,
      address,
      ipLocation: position.split(", "),
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
      "-_id",
      "-customerName",
      "-customerPhoneNo",
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
