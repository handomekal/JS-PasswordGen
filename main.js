// DOM Elements
const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const upperCaseEL = document.getElementById('uppercase')
const lowerCaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasLower = lowerCaseEL.checked;
    const hasUpper = upperCaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
})

//  Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>/?,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
    
}

//  console.log(getRandomSymbol());