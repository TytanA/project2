const Campaign = require('../models/campaign')

module.exports = {
    create,
    delete: deleteSession
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

async function deleteSession(req, res){
    try {
        const campaignDocument = await Campaign.findOne({
            'gameSession._id': req.params.id
        });
        campaignDocument.gameSession.remove(req.params.id)
        await campaignDocument.save()
        res.redirect(`/campaign`)
    }catch(err){
        res.send(err)
    }

}