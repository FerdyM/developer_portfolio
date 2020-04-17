const router = require('express').Router();
const ContactFormMessage = require('../models/ContactForm');

router.post('/', async (req, res) => {
    const Message = new ContactFormMessage({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    try {
        await Message.save();
        res.send('message sent successfully!');
    } catch(err) {
        res.send(err);
    }
})

module.exports = router;