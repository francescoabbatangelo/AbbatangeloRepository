var vett = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var vett_fin=[];
var i;
for (i = 0; i < vett.length; i++) {
    vett_fin[i]=vett[i]*vett[i];
}


document.getElementById("vett").innerText = vett;
document.getElementById("vett_fin").innerText = vett_fin;
document.getElementById("fine").innerText = "Fine Elaborazione";