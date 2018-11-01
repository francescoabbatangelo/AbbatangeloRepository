var $ = window.jQuery = require('jquery');
const Mustache = require('mustache');
var bootstrap = require('bootstrap');
const sli = require('slick-carousel');
$('*').ready(function () {
    if (window.location.pathname === "/index.html") {
        $.ajax({
            type: "GET",
            url: "/res/all",
            dataType: "json",
            success: function (risposta) {
                let temp = $('#template').html();
                let output = Mustache.render(temp, risposta);
                $('#main').append(output);
            },
            error: function () {
                alert("Errore nel caricamento dei dati");
            }
        });
        $('#here').on('click', function () {
            $('#cookie_div').hide();
        });


    } else if (window.location.pathname === "/pages/chisiamo.html") {
        $.ajax({
            type: "GET",
            url: "/people/all",
            dataType: "json",
            success: function (risposta) {
                let temp = $('#template').html();
                let output = Mustache.render(temp, risposta);
                $('#main_people').append(output);

            },
            error: function () {
                alert("Errore nel caricamento dei dati");
            }
        });

        $('.slide').slick({
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true
        });


    } else if (window.location.pathname === "/pages/lavori.html") {
        var n_len;
        $.ajax({
            type: "GET",
            url: "/like/all",
            dataType: "json",
            success: function (risposta) {
                n_len = risposta.length;
                for (let i = 0; i < risposta.length; i++) {
                    $('#work_' + (i + 1)).append(risposta[i].num);
                }
            },
            error: function () {
                alert("Errore nel caricamento dei dati");
            },
            complete: function () {
                for (let i = 0; i < n_len; i++) {
                    $('#work_btn_' + (i + 1)).on('click', function () {
                        $.ajax({
                            type: "POST",
                            url: "/addlike/",
                            data: {id: (i + 1)},
                            success: function () {
                                location.reload(true);
                            }
                        });
                    });
                }
            }
        });
    }
})
;


