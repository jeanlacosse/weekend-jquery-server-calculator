
function setupClickListeners() {
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
        Answer is: ${response.answers}
        `)
        $('#pastEquations').append(`
        <li>${response.firstNum} ${response.operator} ${response.secondNum} = ${response.answers}</li>
        `)
    }
}

function submitMath(evt) {
    evt.preventDefault();
    let mathInputs = {};
    mathInputs.firstNum = $('#firstNum').text(),
        mathInputs.secondNum = $('#secondNum').text(),
        mathInputs.operator = $('#operator').text(),

        console.log('math inputs', mathInputs)
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
