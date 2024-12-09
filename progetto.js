$(document).ready(function() {
        $('.correzioni').hide();
        $display=false;
        $('.regolarizzate').hide();
        $displayreg=false;
        
       
        
    $("button").click(function() {
    
    
        var $id_bottone = $(this).attr('id');
        var $colore_bott = $(this).attr('class'); // La classe, che assume il ruolo del colore
        var $button = $("." + $id_bottone); // Seleziona il bottone tramite ID, che è unico

        var currentColor = $button.css('color'); // Ottieni il colore del testo (font color)

        // Verifica se il colore del testo è nero (rgb(0, 0, 0) o "black")
        if (currentColor === "rgb(0, 0, 0)" || currentColor === "black") {
            $button.css('color', $colore_bott); // Imposta il colore del testo sulla classe
            $button.css('background-color', 'lightgrey');
            $button.css('font-weight', 'bold'); // Imposta il testo in grassetto
        } else {
            $button.css('color', 'black'); // Imposta il colore del testo su nero
            $button.css('background-color', 'transparent');
            $button.css('font-weight', 'normal'); // Rimuovi il grassetto
            
        }
    });

    $("button#sic").click(function() {
        if ($display==false){
            $('.correzioni').show();
            $display=true;
        }else{
            $('.correzioni').hide();
            $display=false;
        }
    });

    $("button#regolarizzazioni").click(function() {
        if ($displayreg==false){
            $('.regolarizzate').show();
            $displayreg=true;
        }else{
            $('.regolarizzate').hide();
            $displayreg=false;
        }
    });


    $('a.popup-trigger').click(function(event) {
        //rimane nella posizione della pagina che interessa, senza spostamenti in caso di clic
        event.preventDefault();

        
        var anaValue = $(this).attr('id'); 
        var spanId = 'popup_' + anaValue; // Crea l'ID del pop-up 
        console.log(spanId);


        var $popup = $('#' + spanId);
        $popup.toggle();  

        // Posiziona il pop-up vicino al numero cliccato
        $popup.css({
            top: event.pageY + 10 + 'px',
            left: event.pageX + 10 + 'px'
        });
    });

    $("area").click(function(){
        $id_area=$(this).attr('id');
        console.log($id_area);
        $('html, body').animate({
            scrollTop: $("span#"+$id_area).offset().top - 100
         }, 1000);
         
        $("#"+$id_area).addClass("active-background");
    
        // Durata valenza classe (colore)
        setTimeout(function() {
            $("#"+$id_area).removeClass("active-background");
        }, 3000); // 1000 millisecondi = 1 secondo

         
    });

    $(".image img").click(function() {
        console.log('ok');
        
        if ($(this).hasClass('small')) {
            // Ripristina la larghezza e altezza per l'immagine a dimensione piena
            $(this).css({
                "width": "100%",  // Imposta la larghezza al 100% (dimensione piena)
                "height": "auto"  // Imposta l'altezza automaticamente in base alla larghezza
            });
            // Rimuovi la classe 'small'
            $(this).removeClass('small');
        } else {
            // Imposta una dimensione ridotta per l'immagine
            $(this).css({
                "width": "30%",     // Imposta la larghezza al 30%
                "height": "auto",   // Imposta l'altezza automaticamente
                "max-width": "100%", // Impedisce che l'immagine superi la larghezza del contenitore
                "margin": "10px 0"   // Imposta il margine
            });
            // Aggiungi la classe 'small'
            $(this).addClass('small');
        }
    });

    $(".image img").hover(
        function() {
            $(this).css({
                "cursor": "pointer", // Cambia il cursore per rendere l'interazione più chiara
            });
        },
        function() {
            $(this).css({
                "cursor": "default", // Ripristina il cursore
            });
        }
    );
    
    $("")

});


