const express = require('express');
const app = express();
const contactForm = require('./routes/contactForm')
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 3000
const dotenv = require('dotenv')

app.use(cors())

dotenv.config();

mongoose.connect(
    process.env.DB_HOST, 
    { useNewUrlParser: true},
    () => console.log("Connected to DB")
)


app.use(express.json())

app.use('/api/contact', contactForm)

app.listen(PORT, () => console.log(`up and running om: ${PORT}`))