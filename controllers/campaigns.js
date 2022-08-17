const Campaign = require('../models/campaign')

module.exports = {
    new: newCampaign,
    create,
    index,
    show,
    delete: deleteCampaign,
    edit,
    update,
    myCampaigns
}

function newCampaign(req, res){
    res.render('campaigns/new.ejs')
}

async function index(req, res){
    try{
        const campaignDocument = await Campaign.find({})
        res.render('campaigns/index.ejs', {
            campaigns: campaignDocument
        })
        } catch(err){


    }
}

function create(req, res){
    // i need to convert the string of characterNames, into an array, first getting rid of
    // white space using a reg expression that was used in class.
    req.body.characterNames = req.body.characterNames.replace(/\s*,\s*/g, ',')
    // then splitting it up 
    req.body.characterNames = req.body.characterNames.split(',');
    req.body.user = req.user._id;
    Campaign.create(req.body, function (err, campaignDocument){
        if (err){
            console.log(err, 'this is the error');
            return res.redirect('/')
        }
        console.log(campaignDocument, '<-- newly created campaign')
        // res.redirect() will redirect to the campaigns page once that is built
    })

    res.redirect('campaigns/new')
}

async function myCampaigns(req, res){
    console.log(req.user.id, "this is the user id")
    // try{
    //     let campaignDocument = await Campaign.find({
    //         'user': req.user.id
    //     })
    //     res.render('campaigns/index.ejs', {
    //         campaigns: campaignDocument
    //     })
    // }catch(err){

    // }
}

async function show(req, res){
    
    try{
        let campaignDocument = await Campaign.findById(req.params.id);

        res.render('campaigns/show', {
            campaign: campaignDocument
        })
    }catch(err){
        res.send(err)
    }
}

function deleteCampaign(req, res){
    Campaign.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/campaigns')
        if(err){
            console.log('delete error')
            res.send(err)
        }
    })
}

async function edit(req, res){
    try{
        let campaignDocument = await Campaign.findById(req.params.id);

        res.render('campaigns/edit', {
            campaign: campaignDocument
        })
    }catch(err){
        res.send(err)
    }
}

async function update(req,res){
   
    try{
        let campaignDocument = await Campaign.findByIdAndUpdate(req.params.id);
        req.body.characterNames = req.body.characterNames.replace(/\s*,\s*/g, ',');
        req.body.characterNames = req.body.characterNames.split(',');
        campaignDocument.titleName = req.body.titleName;
        campaignDocument.setting = req.body.setting;
        campaignDocument.description = req.body.description;
        campaignDocument.equipAndGold = req.body.equipAndGold;
        campaignDocument.characterNames = req.body.characterNames;
        campaignDocument.save();
        res.redirect(`${campaignDocument._id}`);
    }catch(err){
        res.send(err);
    }
    
}