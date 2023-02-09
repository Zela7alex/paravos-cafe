const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

//!-- Get all orders ---
router.get('/', (req, res) => {
  Order.find({})
    .then((orders) => res.json(orders))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
   const name = req.fields.name
   const email = req.fields.email
   const phone = req.fields.address
   const orderDate = req.fields.name
   const cart = req.fields.cart
   const total = req.fields.total

   // Creating new instance of order 
  const order = new Order({
    name: name,
    email: email,
    phone: phone,
    orderDate: orderDate,
    cart: cart,
    total: total
  })

  order.save()
  .catch((err) => {
    console.log(err)
    res.status(201).end()
  })
})

module.exports = router
