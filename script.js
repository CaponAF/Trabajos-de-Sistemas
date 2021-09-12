$(document).ready(
    
    function() {

    $padre = $('#seccion0');
    $hija =  $('#seccion0 .efecto');
    
    $hija.each(
    function(){
        
        var elemento =$(this);
       
        if(elemento.hasClass('e-derecha')){
            elemento.css({right: '0px',  filter: 'opacity(0%)'});
        alert('entro')
        }
        if(elemento.hasClass('e-izquierda')){
            elemento.css({left: '0px',  filter: 'opacity(0%)'});
        }
        if(elemento.hasClass('e-arriba')){
            elemento.css({top: '0px',  filter: 'opacity(0%)'});
        }
        if(elemento.hasClass('e-abajo')){
            elemento.css({bottom: '0px',  filter: 'opacity(0%)'});
        }
    }

    );


}

);