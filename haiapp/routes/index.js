var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.get('/alerbox', function(req, res, next) {
  res.render('alertboxs', { title: 'Express' });
});
module.exports = router;
