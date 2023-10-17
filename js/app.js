function generateNumbers() {
    let numbersArray = [];

    while (numbersArray.length < 5) {
        const n = getRandomNumber(0, 9);

        if (!numbersArray.includes(n)) {
            numbersArray.push(n);
        }
    }

    return numbersArray;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getInputAndPrintResults(numbersArray) {
    let points = 0;
    let resultString = '';
    let correctInputs = [];

    for (let i = 0; i < numbersArray.length; i++) {
        let num = prompt('Inserisci il ' + (i + 1) + '° numero');
        if (num == numbersArray[i]) {
            points++;
            correctInputs.push(num);
        }
    }

    resultString +=
        'Numeri indovinati (' + points + '/' + numbersArray.length + '):';

    for (let i = 0; i < correctInputs.length; i++) {
        resultString += ' ' + correctInputs[i];
    }

    return resultString;
}

let timerDOMElement = document.getElementById('timer');

const startBtnDOMElement = document.getElementById('start');

const numbersDOMElement = document.getElementById('numbers');

startBtnDOMElement.addEventListener('click', function () {
    let numbersArray = generateNumbers();
    console.log(numbersArray);
    numbersDOMElement.innerHTML = numbersArray;

    setTimeout(function onInterval() {
        let counter = 30;

        numbersDOMElement.classList.add('d-none');

        let idInterval = setInterval(function countDown() {
            if (counter === 0) {
                console.log('Time Out!');
                clearInterval(idInterval);
                timerDOMElement.innerHTML = 'Ti sei ricordato i numeri?';

                console.log(getInputAndPrintResults(numbersArray));
            } else {
                timerDOMElement.innerHTML = counter;
                counter--;
            }
        }, 1000);
    }, 5000);
});
