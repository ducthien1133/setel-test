const schedule = require('node-schedule');
const express = require('express');
const bodyParser = require('body-parser');
const orders = require('./src/controllers/order.controller');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Order application."});
});

require('./src/routes/order.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
    var j = schedule.scheduleJob('0-59/30 * * * * *', function(){
        orders.autoUpdate();
      });
});