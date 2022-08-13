const Campaign = require('../models/campaign')

module.exports = {
    new: newCampaign,
}

function newCampaign(req, res){
    res.render('campaigns/new.ejs')
}