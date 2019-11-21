const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose')

router.get('/', (req, res, next) => {
  res.render('register')
})

router.get('/oops', (req,res) => {
  res.render('oops')
})
router.post('/', async (req, res, next) => {
  const conn = await mongoose.connect(process.env.MONGOOSE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  
  user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  await user.save();
})


module.exports = router;
