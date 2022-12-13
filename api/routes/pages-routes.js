const express = require('express')
const router = express.Router()
const Page = require('../models/Page')

//! --- Get all Pages ---
router.get('/', (req, res) => {
  Page.find({})
    .then((pages) => res.json(pages))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
