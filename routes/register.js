const router = express.Router();

router.get('/', (req,res,next) => {
  res.render('register')
})




module.exports = router;