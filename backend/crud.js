import axios from 'axios'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Declare Schema using Mongoose
const productSchema = mongoose.Schema(
  {
    // Create a relationship between the product and the user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: String,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

// Create Model
const Product = mongoose.model('Product', productSchema)

// Read from the feed
const listProducts = async () => {
  const product = await Product.findById(process.env.ID)
  console.log('Product Found: ' + product)
}

// Read from Database directly

export default listProducts
