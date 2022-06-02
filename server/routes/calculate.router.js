const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "calculator" 
    ORDER BY "id" DESC;
    `;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in /GET', error);
            res.sendStatus(500);
        });
});

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
    let operators = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b },
        '/': function (a, b) { return a / b },
        '*': function (a, b) { return a * b },
    }

    console.log('in calculate eqn', mathNums)
    // for (let input of mathNums) {
    //     console.log('in calculateEqn', input);
    //     let answer = {
    //         operator: input.operator,
    //         firstNum: input.firstNum,
    //         secondNum: input.secondNum,
    //         answer: operators[input.operator](Number(input.firstNum), Number(input.secondNum))
    //     }
    //     return answer;
    // }
}

