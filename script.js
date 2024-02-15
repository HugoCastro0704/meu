$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var carta = $("#carta");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }

    function mostrarCarta() {
        carta.html(`Há alguns meses atrás, eu pensava que isso não aconteceria, que você não aconteceria,
        TMJ Irmão é nois. Amo você.`);
    }

    function ocultarCarta() {
        carta.html("");
    }
   
});
