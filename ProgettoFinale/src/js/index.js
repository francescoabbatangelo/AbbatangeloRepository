const $=require('jquery');

$('*').ready(function () {

    for (let i = 1; i <= 4; i++) {
        $('#like' + i).on('click', function () {
            if ($('#like' + i).hasClass("btn btn-default remove_background")) {
                $('#like' + i).removeClass('btn btn-default remove_background').addClass('btn btn-success remove_background');
            }
            else if ($('#like' + i).hasClass("btn btn-success remove_background")) {
                $('#like' + i).removeClass('btn btn-success remove_background').addClass('btn btn-default remove_background');
            }
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
            alert("Chiamata fallita!!!");
        }
    });
})
;