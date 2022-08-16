var express = require('express');
var router = express.Router();
const passport = require('passport');
const campaignController = require('../controllers/campaigns');
const isLoggedIn = require('../config/auth');

//route to the new page
router.get('/new', isLoggedIn, campaignController.new);

router.get('/', campaignController.index);

router.get('/:id', campaignController.show)

//create a new campaign
router.post('/', isLoggedIn, campaignController.create);

router.delete('/:id', campaignController.delete)

module.exports = router;