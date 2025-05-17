const router = require('express').Router();

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    req.send('hello world');
});
router.use('/api-docs', require('./swagger'));

router.use('/users', require('./users'));

module.exports = router;