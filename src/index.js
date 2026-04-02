const express = require('express');

const { PORT } = require('./config/serverConfig');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const setUpAndStartServer = () => {
    
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
