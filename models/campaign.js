const mongoose = require('mongoose');
const user = require('./user');

const gameSessionSchema = new mongoose.Schema ({
    sessionTitle: String,
    encounters: String,
    treasure: String, 
    sessionDescrip: String

});


const campaignSchema = mongoose.Schema({
    titleName: {
        type: String,
        required: true,
    },
    characterNames: [String],
    setting: String,
    description: String,
    equipAndGold: String,
    gameSession: [gameSessionSchema],
    user: {type: mongoose.Schema.Types.ObjectId, ref: user, required: true}
})


module.exports = mongoose.model('Campaign', campaignSchema)