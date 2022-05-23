function renderMath(mathResonse) {
    // gets the last key in the object --- idk if this works

    // resets the values in the HTML
    $('.numInput').val('');
    // $('#pastEquations').empty();
    $('#answer').empty();

    // append to DOM here from the math that was setn from server in the GET mathObj
    // pop the last objecct and grab the .answer and only append the one to the DOM
    const lastAnswer = Object.values(mathResonse).pop();
    console.log(lastAnswer)
    $('#answer').append(`
        Answer is: ${lastAnswer.answer}
        `)
    $('#pastEquations').append(`
        <li>${lastAnswer.firstNum} ${lastAnswer.operator} ${lastAnswer.secondNum} = ${lastAnswer.answer}</li>
        `)

}

// appending numbers from buttons to first span, and second span if operator span has something in it
function appendNum() {
    if ($('#operator').text() === '') {
        $('#firstNum').append(`${$(this).text()}`);
    }
    else {
        // why did the line break here break my code?
        $('#secondNum').append(`${$(this).text()}`)
    }
}

// allow only one thing to append to operator at a time
function appendOp() {
    if ($('#operator').text() === '') {
        // could be this.val() as well b/c its a button
        $('#operator').append(`${$(this).text()}`)
    }
    else {
        return
    }
}
