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


//!-- Post each order ---
router.post('/', (req, res) => {
  console.log(req.fields) // req.fields is used instead of just req. due to formidabble
   const name = req.fields.name 
   const email = req.fields.email
   const phone = req.fields.phone
   const orderDate = req.fields.orderDate
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

  
order.save(error => {
  if (error) {
    console.log(error)
    res.status(201).end()
  }
  else {
    res.status(200).json(order);
  }
})
})

module.exports = router
