$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded')
    fetchMath();
    setupClickListeners ();
}

function setupClickListeners () {
    $('#submitBtn').on('click', submitMath);
    $('#clearBtn').on('click', clearOutCalculateBox);
    $('.numBtn').on('click', appendNum)
    $('.operatorBtn').on('click', appendOp)
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

function clearOutCalculateBox(evt) {
    evt.preventDefault();
    $('.calculateBox').empty();
}



