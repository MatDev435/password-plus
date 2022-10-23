const testEl = document.getElementById('test');
const pwEl = document.getElementById('pw');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numEl = document.getElementById('num');
const symbolEl = document.getElementById('symbol');
const hideEl = document.getElementById('hide');
const genEl = document.getElementById('gen');
const lenText = document.getElementById('len-text');
const pwDiv = document.getElementById('pw-div');
const adWrapper = document.getElementById('ad-wrapper');
const adUpper = document.getElementById('ad-upper');
const adLower = document.getElementById('ad-lower');
const adNumber = document.getElementById('ad-number');
const adSymbol = document.getElementById('ad-symbol');
const ad = document.getElementById('ad');

let newPassword = '';
let oldLen = 0;

let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowers = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%&_+ç/;-|\°{}()[]';

lengthEl.oninput = function() {
    lenText.innerHTML = this.value;
}

hideEl.onchange = function() {
    if(hideEl.checked) {
        pwEl.innerText = '';

        for(let i = 0; i < oldLen; i++) {
            pwEl.innerText += '*';
        }
    } else {
        pwEl.innerText = newPassword;
    }
}

const getUpper = () => {
    return uppers.charAt(Math.floor(Math.random() * uppers.length));
}

const getLower = () => {
    return lowers.charAt(Math.floor(Math.random() * lowers.length));
}

const getNumber = () => {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

const getSymbol = () => {
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

const generatePassword = () => {
    const len = lengthEl.value;
    let password = '';
    let v = 0;

    oldLen = len;

    for(let i = 0; i < len; ++i) {
        if(upperEl.checked) {
            if(v < len) {
                v++;
                password += getUpper();
            }
        }

        if(lowerEl.checked) {
            if(v < len) {
                v++;
                password += getLower();
            }
        }

        if(numEl.checked) {
            if(v < len) {
                v++;
                password += getNumber();
            }
        }

        if(symbolEl.checked) {
            if(v < len) {
                v++;
                password += getSymbol();
            }
        }
    }

    newPassword = password;

    if(!hideEl.checked) {
        pwEl.innerText = password
    } else {
        pwEl.innerText = '';
        for(let j = 0; j < len; j++) {
            pwEl.innerText += '*';
        }
    }
}

genEl.addEventListener('click', () => {
    uppers = adUpper.value;
    lowers = adLower.value;
    numbers = adNumber.value;
    symbols = adSymbol.value;

    if(!adWrapper.classList.contains('hidden')) {
        adWrapper.classList.add('hidden');
        testEl.classList.remove('hidden2');
        ad.innerHTML = 'Avançados';
    }

    generatePassword();
});

pwDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(newPassword);
})

ad.addEventListener('click', () => {
    if(adWrapper.classList.contains('hidden')) {
        adWrapper.classList.remove('hidden');
        testEl.classList.add('hidden2');
        ad.innerHTML = 'Voltar';

    } else {
        adWrapper.classList.add('hidden');
        testEl.classList.remove('hidden2');
        ad.innerHTML = 'Avançados';
    }
})