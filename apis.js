

const mysql = require('mysql2/promise');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let applications = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/application', (req, res) => {
    const application = req.body;

    // Output the book to the console for debugging
    console.log(application);
    applications.push(application);

    res.send('application is added to the database');
});
app.get('/applications', (req, res) => {
    res.json(applications);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));