const PlayerRepository = require('../repository/player-repository');

class PlayerService {
    constructor() {
        this.playerRepository = new PlayerRepository();
    }

    async createPlayer(playerData) {
        return await this.playerRepository.create(playerData);
    }

    async getPlayerById(playerId) {
        return await this.playerRepository.getById(playerId);
    }

    async getPlayerByEmail(email) {
        return await this.playerRepository.getByEmail(email);
    }

    async updatePlayer(playerId, updateData) {
        return await this.playerRepository.update(playerId, updateData);
    }

    async deletePlayer(playerId) {
        return await this.playerRepository.delete(playerId);
    }
}

module.exports = PlayerService;
 