const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create user by Using: POST "ppi/auth"

router.post('/', (req, res) => {

    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body); 
}) 

module.exports = router