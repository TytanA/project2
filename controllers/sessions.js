const Campaign = require('../models/campaign')

module.exports = {
    create,
}

async function create(req, res){
console.log(req.body, '<-here is the sessions stuff')
    try{
        let campaignDocument = await Campaign.findById(req.params.id);
        campaignDocument.gameSession.push(req.body);
        console.log(campaignDocument);
        campaignDocument.save(function(err){
            res.redirect(`/campaigns/${req.params.id}`)
        })
    }catch(err){
        res.send(err)
    }
}