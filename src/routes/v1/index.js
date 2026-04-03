const express = require('express');

const router = express.Router();

const PlayerController = require('../../controller/player-controller');
const playerController = new PlayerController();

router.post('/signup', playerController.signUp.bind(playerController));
router.post('/signin', playerController.signIn.bind(playerController));
router.get('/:id', playerController.getPlayerById.bind(playerController));
router.get('/', playerController.getAllPlayers.bind(playerController));

module.exports = router;
