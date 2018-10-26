const $ = require('jquery');

$('*').ready(function () {
    for (let i = 1; i <= 4; i++) {
        let like = $('#like' + i);
        like.on('click', function () {
            like.toggleClass("btn btn-success remove_background");
        });
    }

    $('#here').on('click', function () {
        $('#cookie_div').hide();
    });

    $.ajax({
        type: "GET",
        url: "/ProgettoFinale/src/json/data.json",
        dataType: "json",
        success: function (risposta) {
            for (var i = 0; i < risposta.length; i++)
                $("#sez" + (i + 1)).append(risposta[i].txt);
        },
        error: function () {
            alert("Dati non caricati");
        }
    });
})
;


