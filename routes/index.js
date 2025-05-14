const router = require('express').Router();

router.get('/', (req, res) => { req.setEncoding('hello world'); });

module.exports = router;