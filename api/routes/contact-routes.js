const express = require("express")
const router = express.Router()
const mailgun = require('mailgun-js') ;

const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })


router.post('/', (req, res) => {
  let data = req.fields;
  
  mg.messages().send({
    from: `<${data.email}>`,
    to: `inquiries@paravoscafe.com`,
    subject: `Catering Inquiry`,
    text: `First_Name: ${data.firstName} | Last_Name: ${data.lastName} |  Date: ${data.date} |  Num_Of_People: ${data.numOfPeople} `,
  },
  function (error, body) {
    if (error) {
      console.log(error)
       console.log(body)
    } else {
      console.log(res.status(200))
    }
  })
});
module.exports = router;