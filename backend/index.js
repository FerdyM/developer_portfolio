const express = require('express');
const app = express();
const contactForm = require('./routes/contactForm')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(
    process.env.DB_HOST, 
    { useNewUrlParser: true},
    () => console.log("Connected to DB")
)

app.use(express.json())
app.use('/api/contact', contactForm)
app.listen(process.env.BACKEND_PORT, () => console.log(`up and running om: ${process.env.BACKEND_PORT}`))