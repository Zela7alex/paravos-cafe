const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

//!-- Get all Products ---
router.get('/', (req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
