const express = require('express');
const user_routes = require('./user');
const category_route = require('./category');
const promotion_route = require('./promotion');

const router = express.Router();

router.use('/user', user_routes);
router.use('/category', category_route);
router.use('/promotion', promotion_route);

module.exports = router;