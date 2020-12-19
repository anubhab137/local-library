var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{insert:'No user found'});
});

router.get('/cool',(req,res,next)=>{
  res.render('users',{insert:'You\'re so cool'});
  
});

module.exports = router;
