const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const formidableMiddleware = require('express-formidable')
const config = require('./config/db.config.js')
const PORT = process.env.PORT || 3000

// Mongoose update "true" to use strictQuery
mongoose.set('strictQuery', true);

//^ --- Initialize server ---
const app = express()

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

//?---- API LISTEN ROUTE - listens for the port user will be making requests to view data ----
app.listen(PORT, () => {
  // PORT listened to by mongoDB
  console.log(`Server now on port ${PORT}!`)
})
