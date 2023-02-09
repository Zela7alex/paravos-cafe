const mongoose = require('mongoose')

//^------ Page Schema --------
const OrderSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  orderDate: {
    type: String,
  },
  cart: {
    type: String,
  },
  total: {
    type: Number,
  },
})
const Order = (module.exports = mongoose.model('Order', OrderSchema))
