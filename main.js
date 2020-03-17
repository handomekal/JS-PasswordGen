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

// Generate event listen
generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasLower = lowerCaseEL.checked;
    const hasUpper = upperCaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;

    resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// copy password to clipboard
clipboardEL.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEL.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!')
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    //  Init password variable
    let generatedPassword = '';
    //  filter out unchecked types
    const typesCount = lower + upper + number + symbol;
    // console.log('typesCount', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    // console.log('typesArr', typesArr);

    if(typesCount === 0) {
        return '';
    }
    //  loop over length call generator function for each type

    for(let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }

        //  add final password to the pw var and return

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;   
}

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