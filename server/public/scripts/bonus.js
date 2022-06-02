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

function appendNum() {
    if ($('#operator').text() === '') {
        $('#firstNum').append(`${$(this).text()}`);
    }
    else {
        $('#secondNum').append(`${$(this).text()}`)
    }
}

function appendOp() {
    if ($('#operator').text() === '') {
        $('#operator').append(`${$(this).text()}`)
    }
    else {
        return;
    }
}
