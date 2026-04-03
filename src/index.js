const express = require('express');

const { PORT } = require('./config/serverConfig');
const connectToMongoDB = require('./config/database');
const apiV1Routes = require('./routes/index');
const authenticUserMiddleware = require('./middleware/auth-player');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/get', authenticUserMiddleware, (req, res) => {
    res.json({
        message: 'Welcome to the Multiplayer Game API'
    });
});

app.use('/api', apiV1Routes);


const setUpAndStartServer = () => {

    // mongo DB connection
    connectToMongoDB();
    
    // port listening
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
