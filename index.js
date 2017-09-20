const express = require('express');
const bodyParser = require('body-parser');

const ephemeralKey = require('./src/ephemeralKey');
const customers = require('./src/customers');
const app = express();
const port = 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/key', ephemeralKey);
app.post('/api/customers', customers);

app.listen(port, function(){
    console.log('Server started on port: ' + port);
});

