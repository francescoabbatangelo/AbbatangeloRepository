var a=10;
var b=5;
var piu="+";
var meno="-";
var per="*";
var div="/";
var ug="=";

document.getElementById("op1_somma").innerText=a;
document.getElementById("op2_somma").innerText=b;
document.getElementById("somma").innerText=piu;
document.getElementById("ug_somma").innerText=ug;
document.getElementById("res_somma").innerText=(a+b);

document.getElementById("op1_sott").innerText=a;
document.getElementById("op2_sott").innerText=b;
document.getElementById("sott").innerText=meno;
document.getElementById("ug_sott").innerText=ug;
document.getElementById("res_sott").innerText=(a-b);

document.getElementById("op1_mol").innerText=a;
document.getElementById("op2_mol").innerText=b;
document.getElementById("mol").innerText=per;
document.getElementById("ug_mol").innerText=ug;
document.getElementById("res_mol").innerText=(a*b);

document.getElementById("op1_div").innerText=a;
document.getElementById("op2_div").innerText=b;
document.getElementById("div").innerText=div;
document.getElementById("ug_div").innerText=ug;
document.getElementById("res_div").innerText=(a/b);