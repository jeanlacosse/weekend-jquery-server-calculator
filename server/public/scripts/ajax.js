function postMath (mathInputs) {
    $.ajax({
        url: '/calculate',
        method: 'POST',  
        data: mathInputs,
    }).then(() => {
        console.log('POST /calculate working', mathInputs)

        fetchMath()
    }).catch((err) => {
        console.log('error is', err)
    });
};

function fetchMath() {
    $.ajax({
        url: '/calculate',
        method: 'GET',
    }).then((mathResonse) => {
        console.log('GET request working', mathResonse);
        renderAnswerToDom(mathResonse);
    }).catch((err) => {
        console.log('error is ', err);
    })
}