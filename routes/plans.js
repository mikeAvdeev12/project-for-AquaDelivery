const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')


router.get('/', (req, res, next) => {
  res.render('plans')
})

router.post('/', async (req, res, next) => {
  // let id = req.session.user._id;
  console.log(req.body);
  
  
  const conn = await mongoose.connect(process.env.MONGOOSE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  // let test = await User.findOne({_id: id});
  // console.log(test)
  // test.plan = chosenPlan;
  // console.log(test)
  // await test.save();
  res.send(true);
})

module.exports = router;