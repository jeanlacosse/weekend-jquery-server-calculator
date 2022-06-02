const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "calculator" 
    ORDER BY "id" DESC;
    `;
    // send query text to DB
    pool.query(queryText)
        .then(result => {
            // Sends back the results in an object
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in /GET', error);
            res.sendStatus(500);
        });
});

let operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b },
}


router.post('/', (req, res) => {
    let newCalculation = req.body;
    // undefined... why?
    console.log(`Adding calculation`, newCalculation);

    let finalAnswers = calculateEqn(newCalculation);

    let queryText = `
    INSERT INTO "calculator" ("firstNum", "secondNum", "operator", "answers")
    VALUES ($1, $2, $3, $4);
    `;

    pool.query(queryText, [finalAnswers.firstNum, finalAnswers.secondNum, finalAnswers.operator, finalAnswers.answer])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new calculation`, error);
            res.sendStatus(500);
        });
});

function calculateEqn(mathNums) {
    console.log('in calculate eqn', mathNums)
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
        return answer;
    }
    
}