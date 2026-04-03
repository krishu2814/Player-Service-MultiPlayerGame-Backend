const PlayerRepository = require('../repository/player-repository');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/serverConfig');

class PlayerService {
    constructor() {
        this.playerRepository = new PlayerRepository();
    }

    async signUp(playerData) {
        // fimd player by email to check if already exists
        const { email, password } = playerData;
        console.log(email, password);
        const player = await this.playerRepository.getByEmail(email);
        if (player) {
            throw new Error('Email already in use');
        }
        // hash the password before saving
        console.log('Hashing password with salt rounds:', SALT_ROUNDS);

        // Convert SALT_ROUNDS to a number if it's a string (since environment variables are strings)
        // Error creating player: [Error: Invalid salt. Salt must be in the form of: $Vers$log2(NumRounds)$saltvalue]
        const hashedPassword = await bcrypt.hash(password, Number(SALT_ROUNDS));
        console.log(hashedPassword);
        playerData.password = hashedPassword;
        
        // if not exists, create new player
        const newPlayer = await this.playerRepository.create(playerData);
        console.log('Created player:', newPlayer);
        newPlayer.password = undefined; // hide password

        return newPlayer;
    }

    // async createPlayer(playerData) {
    //     return await this.playerRepository.create(playerData);
    // }

    async getPlayerById(playerId) {
        return await this.playerRepository.getById(playerId);
    }

    async getAllPlayers() {
        return await this.playerRepository.getAll();
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
 