const Player = require('../model/player-model');

class PlayerRepository {
    async create(playerData) {
        return await Player.create(playerData);
    }

    async getByEmail(email) {
        return await Player.findOne({ email });
    }

    async getById(playerId) {
        return await Player.findById(playerId);
    }

    async getAll() {
        return await Player.find();
    }   

    async update(playerId, updateData) {
        return await Player.findByIdAndUpdate(playerId, updateData, { new: true }); // return updated document
    }

    async delete(playerId) {
        return await Player.findByIdAndDelete(playerId);
    }


}

module.exports = PlayerRepository;
