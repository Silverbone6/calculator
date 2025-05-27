let input = document.getElementById('a');
let result = 0;
let operation = 0;
let add = document.getElementById('add');
let substract = document.getElementById('substract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let output = document.getElementById('output');

document.addEventListener('keydown', function(e) {
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
      if (document.activeElement !== input) {
        input.focus();
      }
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const valorActual = input.value;
      input.value = valorActual.slice(0, start) + e.key + valorActual.slice(end);
      input.setSelectionRange(start + 1, start + 1);
      e.preventDefault();
    } else if (e.key === 'Enter') {
        equals.click();
    } else if (e.key === 'Backspace') {

    } else if (e.key === 'Backspace' && e.key === 'Control') {
        clear.click();
    } else {
        e.preventDefault();
    }
    if (e.key === '+') {
        add.click();
    } else if (e.key === '-') {
        substract.click();
    } else if (e.key === '*') {
        multiply.click();
    } else if (e.key === '/') {
        divide.click();
    }
});

add.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if (!isNaN(a)) {
        operation = 1;
        result = a;
        output.textContent = result + ' +';
    } else {
        output.textContent = 'Invalid input';
    }
    input.focus();
    input.setSelectionRange(0, input.value.length);
});
substract.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if (!isNaN(a)) {
        operation = 2;
        result = a;
        output.textContent = result + ' -';
    } else {
        output.textContent = 'Invalid input';
    }
    input.focus();
    input.setSelectionRange(0, input.value.length);
});
multiply.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if (!isNaN(a)) {
        operation = 3;
        result = a;
        output.textContent = result + ' x';
    } else {
        output.textContent = 'Invalid input';
    }
    input.focus();
    input.setSelectionRange(0, input.value.length);
});
divide.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if (!isNaN(a)) {
        operation = 4;
        result = a;
        output.textContent = result + ' /';
    } else {
        output.textContent = 'Invalid input';
    }
    input.focus();
    input.setSelectionRange(0, input.value.length);
});
equals.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if (!isNaN(a)) {
        if (operation == 1) {
            result += a;
        } else if (operation == 2) {
            result -= a;
        } else if (operation == 3) {
            result *= a;
        } else if (operation == 4) {
            result /= a;
        }
        output.textContent = result;
    } else {
        output.textContent = 'Invalid input';
    }
    input.focus();
    input.setSelectionRange(0, input.value.length);
});

clear.addEventListener('click', function () {
    output.textContent = '';
    input.value = '';
    operation = 0;
    result = 0;
});