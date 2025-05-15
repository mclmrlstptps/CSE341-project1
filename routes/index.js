const router = require('express').Router();

//router.get('/', (req, res) => { req.setEncoding('hello world'); });

console.log(require('./users'));

router.use('/users', require('./users'));

module.exports = router;