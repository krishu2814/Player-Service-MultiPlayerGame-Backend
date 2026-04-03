require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
}
