const Campaign = require('../models/campaign');

module.exports = {
    create,
    delete: deleteSession,
    edit,
    update
}

async function update(req, res){
    console.log(req.params.id, '<-req.params.id')
    try{
        const campaignDocument = await Campaign.findOne({
            'gameSession._id': req.params.id,
            
        })
        const sessionDocument = campaignDocument.gameSession.id(req.params.id);

        sessionDocument.sessionTitle = req.body.sessionTitle;
        sessionDocument.encounters = req.body.encounters;
        sessionDocument.treasure = req.body.treasure;
        sessionDocument.sessionDescrip = req.body.sessionDescrip;
        campaignDocument.save()
        res.redirect(`campaigns/${campaignDocument._id}`)
    }catch(err){
        res.send(err)
    }
}

async function edit(req, res){
    try{
        const campaignDocument = await Campaign.findOne({
            'gameSession._id': req.params.id,
            
        })
        const sessionDocument = campaignDocument.gameSession.id(req.params.id);

        res.render(`sessions/edit`, {
            campaign: campaignDocument,
            gSession: sessionDocument
        })
    
    }catch(err){
        res.send(err)
    }
}

async function create(req, res){

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
        res.redirect(`/campaigns/${campaignDocument._id}`)
    }catch(err){
        res.send(err)
    }

}