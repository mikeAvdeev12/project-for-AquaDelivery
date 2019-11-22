const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose')

// let sess = req.session;
// let userId = sess.user._id;
// console.log(userId);

router.get('/', (req, res, next) => {
  res.render('registration')
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
  req.session.user = user;
  res.send(user)
})


module.exports = router;
