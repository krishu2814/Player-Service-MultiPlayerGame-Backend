const express = require('express');

const router = express.Router();

const PlayerController = require('../../controller/player-controller');
const playerController = new PlayerController();

router.post('/', playerController.createPlayer.bind(playerController));
// router.get('/email/:email', playerController.getPlayerByEmail.bind(playerController));
router.get('/:id', playerController.getPlayerById.bind(playerController));
router.get('/', playerController.getAllPlayers.bind(playerController));

module.exports = router;
