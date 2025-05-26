let input = document.getElementById('a');
let result = 0;
let add = document.getElementById('add');
let substract = document.getElementById('substract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
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
    }
});

equal.addEventListener('click', function () {
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
        
    }   else {
        output.textContent = 'Invalid input';
    }
});

add.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
        output.textContent = a, '+';
    } else {
        output.textContent = 'Invalid input';
    }
});
substract.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
    } else {
        output.textContent = 'Invalid input';
    }
});
multiply.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
    } else {
        output.textContent = 'Invalid input';
    }
});
divide.addEventListener('click', function () {
    let a = parseFloat(input.value);
    if ((e.key >= '0' && e.key <= '9') || e.key == '.') {
    } else {
        output.textContent = 'Invalid input';
    }
});
clear.addEventListener('click', function () {
    input.value = '';
    result = 0;
    output.textContent = result;
});