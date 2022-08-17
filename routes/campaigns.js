var express = require('express');
var router = express.Router();
const passport = require('passport');
const campaignController = require('../controllers/campaigns');
const isLoggedIn = require('../config/auth');

//route to the new page
router.get('/index', campaignController.index);
router.get('/new', isLoggedIn, campaignController.new);
router.get('/mycampaigns', campaignController.myCampaigns)
router.get('/:id', campaignController.show);
router.get('/:id/edit', isLoggedIn, campaignController.edit);

//create a new campaign
router.post('/', isLoggedIn, campaignController.create);
router.put('/:id', isLoggedIn, campaignController.update);
router.delete('/:id', isLoggedIn, campaignController.delete);

module.exports = router;