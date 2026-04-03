const PlayerService = require('../service/player-service');

class PlayerController {
    constructor() {
        this.playerService = new PlayerService();
    }

    async signIn(req, res) {
        try {
            const { email, password } = req.body;
            const player = await this.playerService.signIn(email, password);
            if (!player) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Invalid email or password',
                    player: {},
                    error: {}
                });
            }
            return res.json({
                status: 'success',
                message: 'Player signed in successfully',
                player: player,
                error: {}
            });
            
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }
    
    async signUp(req, res) {
        try {
            const playerData = req.body;
            const newPlayer = await this.playerService.signUp(playerData);
            return res.status(201).json({
                status: 'success',
                message: 'Player created successfully',
                player: newPlayer,
                error: {}
            });
        } catch (error) {
            console.error('Error creating player:', error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }
    

    async getPlayerById(req, res) {
        try {
            const playerId = req.params.id;
            const player = await this.playerService.getPlayerById(playerId);
            if (!player) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Player not found',
                    player: {},
                    error: {}
                });
            }
            return res.json({
                status: 'success',
                message: 'Player fetched successfully',
                player: player,
                error: {}
            });
        } catch (error) {
            console.error('Error fetching player:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }

    async getAllPlayers(req, res) {
        try {
            const players = await this.playerService.getAllPlayers();
            return res.json({
                status: 'success',
                message: 'Players fetched successfully',
                player: players,
                error: {}
            });
        } catch (error) {
            console.error('Error fetching players:', error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }   

    async getPlayerByEmail(req, res) {
        try {
            const email = req.query.email;
            const player = await this.playerService.getPlayerByEmail(email);
            console.log('Fetched player:', player);
            if (!player) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Player not found',
                    player: {},
                    error: {}
                });
            }
            return res.json({
                status: 'success',
                message: 'Player fetched successfully',
                player: player,
                error: {}
            });
        } catch (error) {
            console.error('Error fetching player:', error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }

    async updatePlayer(req, res) {
        try {
            const playerId = req.params.id;
            const updateData = req.body;
            const updatedPlayer = await this.playerService.updatePlayer(playerId, updateData);
            if (!updatedPlayer) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Player not found',
                    player: {},
                    error: {}
                });
            }
            return res.json({
                status: 'success',
                message: 'Player updated successfully',
                player: updatedPlayer,
                error: {}
            });
        } catch (error) {
            console.error('Error updating player:', error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }

    async deletePlayer(req, res) {
        try {
            const playerId = req.params.id;
            const deletedPlayer = await this.playerService.deletePlayer(playerId);
            if (!deletedPlayer) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Player not found',
                    player: {},
                    error: {}
                });
            }
            return res.json({
                status: 'success',
                message: 'Player deleted successfully',
                player: deletedPlayer,
                error: {}
            });
        } catch (error) {
            console.error('Error deleting player:', error);
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                player: {},
                error: error
            });
        }
    }
}

module.exports = PlayerController;  
