const express = require('express');

const { PORT } = require('./config/serverConfig');
const connectToMongoDB = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const setUpAndStartServer = () => {

    // mongo DB connection
    connectToMongoDB();
    
    // port listening
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
