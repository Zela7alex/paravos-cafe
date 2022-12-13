const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

// !--- Get all categories ----
router.get('/', (req, res) => {
  Category.find({})
    .then((categories) => res.json(categories))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
