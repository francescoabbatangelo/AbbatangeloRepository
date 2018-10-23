var somma = document.getElementById("somma");
var sott = document.getElementById("sott");
var mol = document.getElementById("mol");
var div = document.getElementById("div");


somma.addEventListener("click", function () {
    var op_somma1 = parseInt(document.getElementById("op1").value);
    var op_somma2 = parseInt(document.getElementById("op2").value);
    var res = op_somma1 + op_somma2;
    document.getElementById("res").innerText = res;
});

sott.addEventListener("click", function () {
    var op_sott1 = parseInt(document.getElementById("op1").value);
    var op_sott2 = parseInt(document.getElementById("op2").value);
    var res = op_sott1 - op_sott2;
    document.getElementById("res").innerText = res;
});

mol.addEventListener("click", function () {
    var op_mul1 = parseInt(document.getElementById("op1").value);
    var op_mul2 = parseInt(document.getElementById("op2").value);
    var res = op_mul1 * op_mul2;
    document.getElementById("res").innerText = res;
});

div.addEventListener("click", function () {
    var op_div1 = parseFloat(document.getElementById("op1").value);
    var op_div2 = parseFloat(document.getElementById("op2").value);
    var res = op_div1 / op_div2;
    document.getElementById("res").innerText = res;
});