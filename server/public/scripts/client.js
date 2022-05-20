$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded')
    // add click listeners for all four math buttons here
    // better to have one listener for the class of buttons and then the function call will decide which is being clicked

    // Below only need if doing multiple buttons, for now just doing a selector
    // $('.mathBtn').on('click', mathBtn);
    $('#submitBtn').on('click', submitMath)
}


function submitMath(evt) {
    // prevent form from reloading page
    evt.preventDefault();
    console.log('button works!')

    let mathInputs = {
        numOne: Number($('#numOne').val()),
        numTwo: Number($('#numTwo').val()),
        operator: $('#operator').val(),
    }

    $.ajax({
        // create post to send data to server
        url: '/calculate',
        method: 'POST',
        data: mathInputs,
    }).then(() => {
        console.log('POST /calculate working', mathInputs)

        // call the GET
        fetchMath()
    }).catch((err) => {
        console.log('error is', err)
    })
}

function fetchMath() {
    $.ajax({
        url: '/calculate',
        method: 'GET',
    }).then((mathResonse) => {
        console.log('GET request working', mathResonse);
        // send the object to a function which will send to DOM
        renderMath(mathResonse);
    }).catch((err) => {
        console.log('error is ', err);
    })
}

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
        <li>${lastAnswer.numOne} ${lastAnswer.operator} ${lastAnswer.numTwo} = ${lastAnswer.answer}</li>
        `)

}

