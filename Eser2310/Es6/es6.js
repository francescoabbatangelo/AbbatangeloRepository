var colori = ["red", "green", "blue","pink","brown","yellow","black","orange"];
var i = 0;
var inter;
var resume;

document.getElementById("bd").onload = function () {
    inter=window.setInterval(fun, 15000);
};


function fun() {
    if (i === colori.length) {
        i = 0;
        document.getElementById("bd").style.backgroundColor = colori[i];
    } else {
        document.getElementById("bd").style.backgroundColor = colori[i];
        i++;
    }
}

document.getElementById("ferma").addEventListener("click", function () {
    clearInterval(inter);
    var temp = document.getElementById("bd").style.backgroundColor;
    document.getElementById("bd").style.backgroundColor = temp;
resume=i;
});

document.getElementById("continua").addEventListener("click", function () {
    inter=window.setInterval(fun, 15000);
});