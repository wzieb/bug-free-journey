const router = require('express').Router();//Router is a class that we get from express libraryr. additional functionality. when a request matches
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;
