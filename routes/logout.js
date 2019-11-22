const express = require('express');
const router = express.Router();

router.post('/registration', function (req, res) {
  req.logout();
  res.clearCookie('user_sid');
  req.session.destroy();
  res.redirect('/registration');
});

module.exports = router;
