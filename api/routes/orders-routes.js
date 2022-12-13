const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

//!-- Get all Products ---
router.get('/', (req, res) => {
  Order.find({})
    .then((orders) => res.json(orders))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
