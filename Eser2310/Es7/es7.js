document.getElementById("cap").addEventListener("change", function () {
    if (document.getElementById("cap").value.length === 5) {
        alert("CAP corretto");
    }
});


document.getElementById("nome").addEventListener("change", function () {
    if (Number.isInteger(+document.getElementById("nome").value[document.getElementById("nome").value.length - 1])) {
        alert("Errore: Hai inserito un numero");
    }
});


document.getElementById("invia").addEventListener("click", function () {
    if (document.getElementById("nome").value.length === 0) {
        alert("Errore: nome non inserito");
    }
    if (!document.getElementById("radio")[0].checked || document.getElementById("radio")[1].checked) {
        alert("Errore: sesso non inserito");
    }
    if (document.getElementById("s_lav")[0].checked) {
        if (document.getElementById("txt").value.length === 0) {
            alert("Errore: descrizione non inserita");
        }
    } else {
        alert("Errore: Non sei studente lavoratore");
    }
});