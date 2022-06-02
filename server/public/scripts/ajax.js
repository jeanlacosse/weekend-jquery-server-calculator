
function fetchMath() {
    $.ajax({
        type: 'GET',
        url: '/calculate'
    })
    .then((mathResonse) => {
        console.log('GET request working', mathResonse);
        renderAnswerToDom(mathResonse);
    })
    .catch((err) => {
        console.log('error is ', err);
    })
}

function postMath (mathInputs) {
    $.ajax({
        type: 'POST',  
        url: '/calculate',
        data: mathInputs
    })
    .then((response) => {
        console.log('POST /calculate working', response)
        fetchMath()
    })
    .catch((err) => {
        console.log('error is', err)
    });
};
