document.getElementById("somma").addEventListener("click", function () {

    var n = document.getElementById("v1").value;
    var i;
    var vett=[]
    for (i = 0; i < n; i++) {
        vett[i] = (i+1)*(i+1);
    }
    document.getElementById("vf").innerText = vett;
    document.getElementById("fine").innerText = "Fine Elaborazione";

});

