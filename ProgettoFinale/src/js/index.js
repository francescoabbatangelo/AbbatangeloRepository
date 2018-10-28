const $ = require('jquery');
const Mustache = require('mustache');
$('*').ready(function () {
    var n_elem;
    $.ajax({
        type: "GET",
        url: "/ProgettoFinale/src/json/data.json",
        dataType: "json",
        success: function (risposta) {
            n_elem = risposta.length;
            for (let i = 0; i < n_elem; i++) {
                var btn;
                if (risposta[i].btn) {
                    btn = "btn btn-success remove_background";
                } else {
                    btn = "btn btn-default remove_background";
                }
                let temp =
                    ' <article id="a' + (i + 1) + '" class="col-md-4 col-sm-6 col-xs-12">' +
                    ' <h2>{{title}}</h2>' +
                    ' <img src={{image}}>' +
                    ' <div>' +
                    ' <span class="btn btn-primary remove_background btn-xs"> {{tech}} </span>' +
                    ' </div>' +
                    ' <p>{{text}}' +
                    ' </p>' +
                    ' <div>' +
                    ' <button id="like' + (i + 1) + '" class="' + btn + '">like</button>' +
                    ' </div>' +
                    ' </article>';
                let output = Mustache.render(temp, risposta[i]);
                $('#main').append(output);
            }
        },
        error: function () {
            alert("Errore nel caricamento dei dati");
        },
        complete: function () {
            for (let i = 0; i < n_elem; i++) {
                $('#like' + (i + 1)).on('click', function () {
                    $('#like' + (i + 1)).toggleClass("btn-success");
                });
            }
        }
    });

    $('#here').on('click', function () {
        $('#cookie_div').hide();
    });
})
;


