let input1 = document.getElementById("a");
let result = 0;
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let limpiar = document.getElementById("limpiar");
let output = document.getElementById("output");
sumar.addEventListener("click", function () {
    let a = parseFloat(input1.value);
    if (isNaN(a)) {
        output.textContent = "Input inválido";
    } else {
        result += a;
        output.textContent = result;
    }
});
restar.addEventListener("click", function () {
    let a = parseFloat(input1.value);
    if (isNaN(a)) {
        output.textContent = "Input inválido";
    } else {
        result -= a;
        output.textContent = result;
    }
});
multiplicar.addEventListener("click", function () {
    let a = parseFloat(input1.value);
    if (isNaN(a)) {
        output.textContent = "Input inválido";
    } else {
        result *= a;
        output.textContent = result;
    }
});
dividir.addEventListener("click", function () {
    let a = parseFloat(input1.value);
    if (isNaN(a)) {
        output.textContent = "Input inválido";
    } else {
        result /= a;
        output.textContent = result;
    }
});
limpiar.addEventListener("click", function () {
    let a = parseFloat(input1.value);
    if (isNaN(a)) {
        output.textContent = "Input inválido";
    } else {
        result = 0;
        output.textContent = result;
    }
});