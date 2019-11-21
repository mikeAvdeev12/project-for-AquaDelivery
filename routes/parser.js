const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', function (req, res, next) {
  res.render('parser');
});

router.post('/', async function (req, res, next) {
  
  let inn = req.body.inn
  // console.log(inn)

  const response = await fetch(`https://api-fns.ru/api/egr?req=${inn}&key=bfd4b6072c05c3201dde967373468a767ddab9fd`);

  // const response = await fetch('https://api-fns.ru/api/egr?req=9715321680&key=195f234896a9df8091803dbaf94fb4a460fb5b8e');

  let data = await response.json()
  let comname = data.items[0].ЮЛ.НаимСокрЮЛ
  // console.log(data)
  // console.log({comname})
  // let car = {
  //   title:123,
  // }
  res.send(data);
// res.render('orglist', {comname});
});


module.exports = router;