
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('./server/public'));

// create operators which turn a string into an eqn that has a value of a function with two parameters
let operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
}

let mathNums = [];
let answers = [];

app.post('/calculate', (req, res) => {
    // push the data from POST into the mathNums array
    mathNums.push(req.body);
    console.log('in the app.post /calculate', req.body);

    
    
    // calculate in server the math nums 
    calculateEqn(mathNums);
    // response all went well
    res.sendStatus(201);
});


app.get('/calculate', (req, res) => {
    console.log('in the app.get for /calculate', answers);

    // send back the calculated answer
    res.send(/*calcualted answer object*/answers)
    answers = [];
})



function calculateEqn(mathNums) {
    
    // looping through mathNums Array
    for (let input of mathNums) {
        console.log('in calculateEqn', input);
        // placing the array items into an eqn, this runs the operators object with the operator and the Number(strings) from the nnumInputs array
        let answer = {
            answer: operators[input.operator](Number(input.numOne), Number(input.numTwo))
        }

        //  sending eqn to a new array for res.send to send back
        console.log(answer)
        answers.push(answer);
        
    }
   
}