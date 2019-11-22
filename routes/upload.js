const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

router.get('/', (req,res) => {
 res.render ('upload')
});

router.use(fileUpload());

router.post('/', (req, res) => {
  if (!req.files) {
    return res.status(400).send('Файл отсутствует, прикрепите файл');
  }
  let sampleFile = req.files.sampleFile;
  // console.log(sampleFile);
  sampleFile.mv('./public/img/sample.png', (err) => {
    if (err)
      return res.status(500).send(err);
    res.redirect('/countdown');
  });  
});

module.exports = router;