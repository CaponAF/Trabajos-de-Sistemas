$(document).ready(

    function () {
    deslizar( $('#seccion0'), $('#seccion0 .efecto') );
    deslizar( $('#seccion0'), $('#seccion0 .efecto') );
 


    }

);


function deslizar( padre, hija) {
     

    hija.each(
        function () {

            var elemento = $(this);

            if(elemento.hasClass('e-derecha')) {
                elemento.css({ right: '0px', filter: 'opacity(100%)' });

            }
            if(elemento.hasClass('e-izquierda')) {
                elemento.css({ left: '0px', filter: 'opacity(100%)' });
            }
            if(elemento.hasClass('e-arriba')) {
                elemento.css({ top: '0px', filter: 'opacity(100%)'});
            }
            if(elemento.hasClass('e-abajo')) {
                elemento.css({ bottom: '0px', filter: 'opacity(100%)'});
            }
        }

    );
}