const $ = require('jquery');
const Mustache = require('mustache');
$('*').ready(function () {
    var n_len;
    $.ajax({
        type: "GET",
        url: "/res/all",
        dataType: "json",
        success: function (risposta) {
            n_len = risposta.length;
            let temp = $('#template').html();
            let output = Mustache.render(temp, risposta);
            $('#main').append(output);
            for (let i = 0; i < risposta.length; i++) {
                if (risposta[i].btn === "true") {
                    $('#btn_' + (i + 1)).addClass("btn btn-success remove_background like");
                } else {
                    $('#btn_' + (i + 1)).addClass("btn btn-default remove_background like")
                }
            }
        },
        error: function () {
            alert("Errore nel caricamento dei dati");
        },
        complete: function () {
            for (let i = 0; i < n_len; i++) {
                $('#btn_' + (i + 1)).on('click', function () {
                    $('#btn_' + (i + 1)).toggleClass("btn-success");
                    let but;
                    if ($('#btn_' + (i + 1)).attr('class').includes("btn-success")) {
                        but = "true";
                    }
                    else if ($('#btn_' + (i + 1)).attr('class').includes("btn-default")) {
                        but = "false";
                    }
                    $.ajax({
                        type: "POST",
                        url: "/modify/",
                        data: {btn: but, id: (i + 1)},
                        dataType: "json",
                        success: function () {
                        }
                    });
                });
            }
        }
    });


    $('#here').on('click', function () {
        $('#cookie_div').hide();
    });
})
;


