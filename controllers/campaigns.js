const Campaign = require('../models/campaign')

module.exports = {
    new: newCampaign,
    create
}

function newCampaign(req, res){
    res.render('campaigns/new.ejs')
}

function create(req, res){
    // i need to convert the string of characterNames, into an array, first getting rid of
    // white space using a reg expression that was used in class.
    req.body.characterNames = req.body.characterNames.replace(/\s*,\s*/g, ',')
    // then splitting it up 
    req.body.characterNames = req.body.characterNames.split(',')
    req.body.user = req.user._id
    Campaign.create(req.body, function (err, campaignDocument){
        if (err){
            console.log(err, 'this is the error');
            return res.render('campaigns/new.ejs')
        }
        console.log(campaignDocument, '<-- newly created campaign')
        // res.redirect() will redirect to the campaigns page once that is built
    })

    res.redirect('campaigns/new')
}