const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const formidableMiddleware = require('express-formidable')
const config = require('./config/db.config.js')
const cors = require('cors')
const PORT = process.env.PORT || 3000

// Mongoose update "true" to use strictQuery
mongoose.set('strictQuery', true);

//^ --- Initialize server ---
const app = express()
app.use(cors())

//^ --- Set Routes ----
const pages = require('./routes/pages-routes.js')
const categories = require('./routes/categories-routes')
const products = require('./routes/products-routes')
const orders = require('./routes/orders-routes')

app.use('/pages', pages)  
app.use('/categories', categories)
app.use('/products', products)
app.use('/orders', orders)


//^ --- Connect to MongoDB ----
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => console.log('connected to MongoDB'))

//^ --- Formidable Middleware ---
app.use(formidableMiddleware())

//^ --- Set public folder ---
app.use(express.static(path.join(__dirname, 'public')))

//^ ---  Add headers ---
app.use(function (req, res, next) {
  // Website connecting to
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  // Request methods being allowed
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers being allowed
  res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Passing to next layer of middleware
  next();
});

//?---- API LISTEN ROUTE - listens for the port user will be making requests to view data ----
app.listen(PORT, () => {
  // PORT listened to by mongoDB
  console.log(`Server now on port ${PORT}!`)
})
