$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded')
    // add click listeners for all four math buttons here
    // better to have one listener for the class of buttons and then the function call will decide which is being clicked

    // Below only need if doing multiple buttons, for now just doing a selector
    // $('.mathBtn').on('click', mathBtn);
    $('#submitBtn').on('submit', submitMath)
}


function submitMath(evt) {
    // prevent form from reloading page
    evt.preventDefault();
    console.log('button works!')
    
    let mathInputs = {
        numOne: Number($('#numOne').val()),
        numTwo: Number($('#numTwo').val()),
        operator: $('#operator').val()
    }

    $.ajax({
        // create post to send data to server
        url: '/calculate',
        method: 'POST',
        data: mathInputs,
    }).then(() => {
        console.log('POST /calculate working')

        // call the GET
        fetchMath()
    }).catch((err) => {
        console.log('error is', err)
    })
}