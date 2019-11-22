const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')


router.get('/', (req, res, next) => {
  res.render('contract')
})

router.post('/agreement', async (req, res, next) => {
  let id = req.session.user._id;
  console.log(id);
  
  const conn = await mongoose.connect(process.env.MONGOOSE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  let test = await User.findOne({_id: id});
  console.log(test)
  test.contractIsSigned = true;
  console.log(test)
  await test.save();
  res.send(true);
})

module.exports = router;