$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded')
    // add click listeners for all four math buttons here
    // better to have one listener for the class of buttons and then the function call will decide which is being clicked

    $('.mathBtn').on('click', mathBtn);
    $('#submitBtn').on('submit', submitMath)
}

function mathBtn(){
    // decide which button was clicked and add that button to the object to send
}

function submitMath(evt) {
    // prevent form from reloading page
    evt.preventDefault();
    console.log('button works!')
    // continue from here
}