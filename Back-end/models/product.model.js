import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: [true, "A product must have unique ID"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
    minLength: 3,
    trim: true,
  },
  slug: {
    type: String,
  },
  category: [
    {
      type: String,
      required: [true, "A product must have a category"],
    },
  ],
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true, // trim set on String type to remove starting and ending whitespace from text
  },
  detail: {
    type: String,
    trim: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  condition: {
    type: String,
    required: [true, "A product must have a condition"],
    enum: ["Brand New", "New condition", "Slightly Used", "Used"],
  },
  newPrice: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  oldPrice: {
    type: Number,
  },
  coverImage: {
    type: String,
    required: [true, "A product must have a covoer image"],
  },
  images: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Review",
    },
  ],
});

// Middleware run before .save() and .create()

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  this.__v >= 0 ? next() : (this.tags = this.tags.concat(this.slug.split("-")));
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;
