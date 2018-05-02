const dices = [0, 1, 2, 3, 4, 5, 6];

dices[0] = document.querySelector('.src1').src;
dices[1] = document.querySelector('.src2').src;
dices[2] = document.querySelector('.src3').src;
dices[3] = document.querySelector('.src4').src;
dices[4] = document.querySelector('.src5').src;
dices[5] = document.querySelector('.src6').src;
dices[6] = document.querySelector('.src1-1').src;

const inputLeft = document.querySelector('#input-left');
const inputRight = document.querySelector('#input-right');
const inputClass = document.querySelector('.form-dice').lastChild;

const buttonOne = document.querySelector('.button1');
const eventButtonLeft = buttonOne.addEventListener('click', rollDiceLeft);

const diceRoll2 = document.querySelector('#src7');
const diceRoll3 = document.querySelector('#src8');


function rollDiceLeft() {
    let k = Math.floor(Math.random() * 6 + 1);
    diceRoll2.src = dices[k];
    if (k < 6) {
        document.querySelector('.dices')[0].value = k + 1;
    } else {
        document.getElementById('input-left').value = 1
    }
    if (inputLeft.value === inputRight.value) {
        document.querySelector('.dices')[2].value = 'DOUBLE!';
    } else {
        document.querySelector('.dices')[2].value = 'NOT!';
    }

};

const buttonTwo = document.querySelector('.button2');
const eventButtonRight = buttonTwo.addEventListener('click', rollDiceRight);

function rollDiceRight() {
    let p = Math.floor(Math.random() * 6 + 1);
    diceRoll3.src = dices[p];
    if (p < 6) {
        document.querySelector('.dices')[1].value = p + 1;
    } else {
        document.getElementById('input-right').value = 1;
    }
    if (inputLeft.value === inputRight.value) {
        document.querySelector('.dices')[2].value = 'DOUBLE!';
    } else {
        document.querySelector('.dices')[2].value = 'NOT!';
    }

};

const button = document.querySelector('.button');
const evButton = button.addEventListener('click', rollDice);

function rollDice() {
    let m = Math.floor(Math.random() * 6 + 1);
    let n = Math.floor(Math.random() * 6 + 1);
    diceRoll2.src = dices[m];
    diceRoll3.src = dices[n];
    if (m < 6) {
        document.querySelector('.dices')[0].value = m + 1;
    } else {
        document.getElementById('input-left').value = 1
    }
    if (n < 6) {
        document.querySelector('.dices')[1].value = n + 1;
    } else {
        document.getElementById('input-right').value = 1;
    }
    if (m === n) {
        document.querySelector('.dices')[2].value = 'DOUBLE!';
    } else {
        document.querySelector('.dices')[2].value = 'NOT!';
    }

}

const pictureRe = document.querySelector('section');
pictureRe.children[7].remove()