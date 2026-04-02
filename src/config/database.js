const mongoose = require('mongoose');
const { MONGO_URL } = require('./serverConfig');

const connectToMongoDB = () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:');
        throw new Error('Error connecting to MongoDB');
    }
}

module.exports = connectToMongoDB;
