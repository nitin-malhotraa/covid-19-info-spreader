var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = req.query.n || "[Your_NAME]"
  res.render('index', { name : name });
});

router.get('/test', function(req, res, next) {
  let name = req.query.n || "[Your_NAME]"
  res.render('test', { name : name });
});

module.exports = router;
