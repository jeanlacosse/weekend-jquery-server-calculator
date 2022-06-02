
function setupClickListeners () {
    $('#submitBtn').on('click', submitMath);
    $('#clearBtn').on('click', clearOutCalculateBox);
    $('.numBtn').on('click', appendNumberToDiv)
    $('.operatorBtn').on('click', appendOperatorToDiv)
}

function renderAnswerToDom(mathResonse) {
    console.log('mathresponse', mathResonse);
    $('.numInput').val('');
    $('#answer').empty();
    $('#pastEquations').empty();

 for (let response of mathResonse) {
        $('#answer').append(`
        Answer is: ${response.answer}
        `)
        $('#pastEquations').append(`
        <li>${response.firstNum} ${response.operator} ${response.secondNum} = ${response.answer}</li>
        `)
    }
    // append to DOM here from the math that was setn from server in the GET mathObj
    // pop the last objecct and grab the .answer and only append the one to the DOM
    // const lastAnswer = Object.values(mathResonse).pop();
    // console.log(lastAnswer)
    // $('#answer').append(`
    //     Answer is: ${lastAnswer.answer}
    //     `)
}

function submitMath(evt) {
    evt.preventDefault();

    let mathInputs = {
        firstNum: $('#firstNum').text(),
        secondNum: $('#secondNum').text(),
        operator: $('#operator').text()
    }
    postMath(mathInputs);

    $('.calculateBox').empty();
}

function appendNumberToDiv() {
    if ($('#operator').text() === '') {
        $('#firstNum').append(`${$(this).text()}`);
    }
    else {
        $('#secondNum').append(`${$(this).text()}`)
    }
}

function appendOperatorToDiv() {
    if ($('#operator').text() === '') {
        $('#operator').append(`${$(this).text()}`)
    }
    else {
        return;
    }
}

function clearOutCalculateBox(evt) {
    evt.preventDefault();
    $('.calculateBox').empty();
}
