// document.getElementById('contacto').onclick = function() {
//     alert('En breve nos pondremos en contacto');
// };

// alert
$(document).ready(function () {
    // $('#demo').on('click', function (e) {
    //     alert('En breve nos pondremos en contacto');
    // }) 

    
    // scrolling del nav
    $('.btn-scroll').off('click').on('click', function(e){
        e.preventDefault();
        var elemento = $(this).attr('data-elemento'); // #nombre al q scrolleamos
        var scroll = $(this).attr('data-scroll'); // indica el margin al q aparecera. agregar #: ex: 100, 56, etc)
        var offset = $(elemento).offset().top; // int.
        var tiempo = $(this).attr('data-tiempo'); // lo q tarda
        $('html, body').animate({
            scrollTop: offset - scroll
        }, tiempo);
    });


    // scrolling for mobile versions (Ejecutar en resize)
    $(window).on('resize', function(e){
        
        if ($('body').width() < 768) {
            
            $('.btn-scroll').each(function () {
                let data_actual = parseInt($(this).attr('data-scroll'));
                data_actual = data_actual + 350;
                $(this).attr('data-scroll', data_actual);
            });
            
        } else {
            if ($('body').width() > 768) {
            $('.btn-scroll').each(function () {
                let data_actual = parseInt($(this).attr('data-scroll'));
                data_actual = data_actual - 350;
                if (data_actual >= 350) {
                    $(this).attr('data-scroll', data_actual);
                }
            });
        }
    } //borrar este corchete si quitamos el body.width de este bloque
    }); 

    // hamburger nav (al abrirse, q se haga cruz para poder cerrar)
    $('.navbar-toggler').click(function (e) {
        var boton = $('#boton_navbar'); 
        var tieneClase = boton.hasClass('navbar-toggler-icon');
        if(tieneClase){
            boton.removeClass('navbar-toggler-icon');
            boton.html('X');
        } else {
            boton.addClass('navbar-toggler-icon');
            boton.html('');
        }
        
    });
});
