var amministratori = ["Francesco", "Carlo", "Silvio"];
document.getElementById("controlla").addEventListener("click", function () {

    var nome = document.getElementById("nome").value;
    var i;
    var bool = false;
    for (i = 0; i < amministratori.length; i++) {
        if (nome.toString() === amministratori[i]) {
            bool = true
        }
    }
    if (bool === true) {
        document.getElementById("esito").innerText = "Hai i diritti";
    } else {
        document.getElementById("esito").innerText = "Non hai i diritti";
    }

});

