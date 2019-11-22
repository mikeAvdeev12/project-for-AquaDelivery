const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  let dataNow = new Date();
  let temp = new Date();
  let dataFinal = temp.setDate(temp.getDate() + 20);
  res.render ('countdown', {dataNow,temp})
 });

 module.exports = router;