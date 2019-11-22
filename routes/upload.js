const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

router.get('/', (req,res) => {
 res.render ('upload')
});

router.use(fileUpload());

router.post('/', function(req, res) {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  let sampleFile = req.files.sampleFile;
console.log(sampleFile);
  sampleFile.mv('./public/img', function(err) {
    if (err)
      return res.status(500).send(err);
    res.send('File uploaded!');
  });
});

// // upload.post ('/upload', function (req,res) {
// // console.log (req.files.foo); // загруженный объект файла 


module.exports = router;