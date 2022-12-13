const mongoose = require('mongoose')

//^------ Page Schema --------
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  toppings: {
    type: Array,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
})
const Product = (module.exports = mongoose.model('Product', ProductSchema))
