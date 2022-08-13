const mongoose = require('mongoose');
const user = require('./user');

const campaignSchema = mongoose.Schema({
    titleName: {
        type: String,
        required: true,
    },
    characterNames: [String],
    setting: String,
    description: String,
    equipAndGold: String,
    gameSession: [reviewSchema],
    creator: user.id
})


module.exports = mongoose.model('Campaign', campaignSchema)