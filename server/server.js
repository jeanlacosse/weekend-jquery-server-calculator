
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// This must be added before GET & POST routes for body parser
app.use(bodyParser.urlencoded({ extended: true }))

// also able to do app.use to source in the app.get and app.post files from another js file by module exports
// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('./server/public'));

// create operators which turn a string into an eqn that has a value of a function with two parameters

// why is there a line break here?????
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
    
    // here I could have used req.body.firstNum instead of sending it to empty array first 

    // calculate in server the math nums 
    calculateEqn(mathNums);
    mathNums = [];
    // response all went well
    res.sendStatus(201);
});

app.get('/calculate', (req, res) => {
    console.log('in the app.get for /calculate', answers);

    // send back the calculated answer
    res.send(/*calcualted answer object*/answers);
    // answers = [];
    
})

function calculateEqn(mathNums) {
    
    // looping through mathNums Array
    for (let input of mathNums) {
        console.log('in calculateEqn', input);
        // placing the array items into an eqn, this runs the operators object with the operator and the Number(strings) from the nnumInputs array
        // how can I place this into the same object as the mathNums?
        let answer = {
            operator: input.operator,
            firstNum: input.firstNum,
            secondNum: input.secondNum,
            answer: operators[input.operator](Number(input.firstNum), Number(input.secondNum))
        }

        //  sending eqn to a new array for res.send to send back
        console.log(answer)
        answers.push(answer);  
    }
   
}
