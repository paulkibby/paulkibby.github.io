let input = '';
let minus = false;
let globalResult = null;

function addNumber(number) {
    input += number;
    renderDisplay(input);
}

function isInputNull() {
    if (input.replace(/\D/, '') == '') {
        return true;
    }
    return false;
}

function addSign(sign) {
    if (!isInputNull()) {
        input += sign;
        renderDisplay(input);
    }
}

function resultCalc() {
    if (!isInputNull()) {
        globalResult = eval(input);
        // renderDisplay(result);
        initGallows();
        input = '';
    }
}

function clearAll() {
    input = '';
    renderDisplay(0);
}

function toggleMinus() {
    if (!minus) {
        input = String('-') + String(input);
    } else {
        input = input.substring(1);
    }

    renderDisplay(input);
    minus = !minus;
}

function renderDisplay(data) {
    document.querySelector('.calc__display').innerHTML = data;
}

// ----
let gallows = document.querySelector('.gallows');
let gallowsClose = document.querySelector('.gallows__close');
let gallowsDisplay = document.querySelector('.gallows__display');
let gallowsImages = document.querySelectorAll('.gallows__img');
let globalLines = '';
let mistakes = 0;

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function showGallows() {
    gallows.style.zIndex = '10';
    gallows.style.opacity = '1';
}

function hideGallows() {
    gallows.style.zIndex = '-10';
    gallows.style.opacity = '0';
}

function initGallows() {
    let numberLength = getNumberLength(globalResult);
    globalLines = generateLines(numberLength);
    renderLines(globalLines);
    showGallows();
}

function getNumberLength(number) {
    return String(number).length;
}

function generateLines(numberLength) {
    let lines = '';
    for (let i = 0; i < numberLength; i++) {
        lines += '_';
    }
    
    return lines.trim();
}

function renderLines(lines) {
    let linesResult = '';
    for (let i = 0; i < lines.length; i++) {
        linesResult += lines[i] + ' ';
    }

    gallowsDisplay.innerHTML = linesResult.trim();
}

function addGallowsNumber(number) {
    if (isAlive()) {
        result = String(globalResult);
        pos = result.indexOf(number);

        if (pos >= 0) {
            openNumbersInLines(number);
            renderLines(globalLines);

            if (isWin()) {
                win();
            }
        } else {
            mistakes += 1;
            changeGallowsImage();

            if (!isAlive()) {
                die();
            }
        }
    }
}

function isAlive() {
    if (mistakes < 4) {
        return true;
    }
    return false;
}

function openNumbersInLines(number) {
    result = String(globalResult);

    for (let i = 0; i < result.length; i++) {
        console.log(i);
        if (result[i] == number) {
            globalLines = globalLines.replaceAt(i, number);
        }
    }
}

function hideAllImages() {
    gallowsImages.forEach((el, i) => {
        el.classList.add('hide');
    });
}

function changeGallowsImage() {
    hideAllImages();
    gallowsImages[mistakes].classList.remove('hide');
}

function die() {
    gallowsClose.classList.add('gallows__close_anim');

    setTimeout(() => {
        hideAllImages();
        gallowsImages[5].classList.remove('hide');

        setTimeout(() => {
            restart();
        }, 2000);
    }, 1000);
}

function win() {
    gallowsClose.classList.add('gallows__close_anim');
    hideAllImages();
    gallowsImages[6].classList.remove('hide');
    setTimeout(() => {
        restart();
    }, 2000);
}

function isWin() {
    if (String(globalResult) == String(globalLines)) {
        return true;
    }
    return false;
}

function restart() {
    input = '';
    minus = false;
    globalResult = null;
    globalLines = '';
    mistakes = 0;

    clearAll();
    hideGallows();
    changeGallowsImage();

    gallowsClose.classList.remove('gallows__close_anim');
}


