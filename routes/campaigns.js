var express = require('express');
var router = express.Router();
const passport = require('passport');
const campaignController = require('../controllers/campaigns');
const isLoggedIn = require('../config/auth');

//route to the new page
router.get('/new', isLoggedIn, campaignController.new);
//create a new campaign
router.post('/', isLoggedIn, campaignController.create);

router.get('/', campaignController.index);

module.exports = router;