
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

const calculateRouter = require('./routes/calculate.router');
app.use('/calculate', calculateRouter)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// This must be added before GET & POST routes for body parser
app.use(bodyParser.urlencoded({ extended: true }))

// also able to do app.use to source in the app.get and app.post files from another js file by module exports
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('./server/public'));

// create operators which turn a string into an eqn that has a value of a function with two parameters

// let mathNums = [];
// let answers = [];

// app.post('/calculate', (req, res) => {
//     // push the data from POST into the mathNums array
//     mathNums.push(req.body);
//     console.log('in the app.post /calculate', req.body);
    
//     // here I could have used req.body.firstNum instead of sending it to empty array first 

//     // calculate in server the math nums 
//     calculateEqn(mathNums);
//     mathNums = [];
//     // response all went well
//     res.sendStatus(201);
// });

// app.get('/calculate', (req, res) => {
//     console.log('in the app.get for /calculate', answers);

//     // send back the calculated answer
//     res.send(/*calcualted answer object*/answers);
//     // answers = [];
    
// })


