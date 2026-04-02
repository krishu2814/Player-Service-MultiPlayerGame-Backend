const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },

    // Profile
    avatar: {
        type: String,
        default: "",
    },

    // Game Data 
    rating: {
        type: Number,
        default: 1000,
        index: true
    },
    gamesPlayed: {
        type: Number,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },

    // Status -> (IMPORTANT for matchmaking)
    status: {
        type: String,
        enum: ['online', 'offline', 'in-game'],
        default: 'offline'
    },

}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
