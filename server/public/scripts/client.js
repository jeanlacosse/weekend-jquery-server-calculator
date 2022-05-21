$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded')
    // add click listeners for all four math buttons here
    // better to have one listener for the class of buttons and then the function call will decide which is being clicked

    // Below only need if doing multiple buttons, for now just doing a selector
    // $('.mathBtn').on('click', mathBtn);
    $('#submitBtn').on('click', submitMath);
    $('#clearBtn').on('click', clearOld);
    $('.numBtn').on('click', appendNum)
    $('.operatorBtn').on('click', appendOp)
}



function submitMath(evt) {
    // prevent form from reloading page
    evt.preventDefault();
    console.log('button works!')


    let mathInputs = {
        firstNum: $('#firstNum').text(),
        secondNum: $('#secondNum').text(),
        operator: $('#operator').text()
    }

    $('.calculateBox').empty();

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

// this function run to clear the old data from teh arrays on teh server side
function clearOld(evt) {
    evt.preventDefault();

    // $('#pastEquations').empty();
    $('.calculateBox').empty();
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



