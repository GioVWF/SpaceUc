$(document).ready(function(){
    var timerInterval;
    var timerUrl = $("#resetCounter").data("timer-url");

    function updateCounter() {
        $.ajax({
            type: 'GET',
            url: timerUrl,
            success: function (response) {
                var temp = response.live_counter;
                $('.counter').empty();
                
                if (temp <= 0) {
                    $(".counter").append("Time is Over");
                    clearInterval(timerInterval); // Detener el intervalo cuando llega a cero
                } else {
                    $(".counter").append(temp);
                }
            },
            error:function(response){
                alert("error");
                clearInterval(timerInterval); // Detener el intervalo en caso de error
            }
        });
    };
    timerInterval = setInterval(updateCounter, 1000);
    $("#resetCounter").click(function () {
        //console.log("Botón de resetear presionado");
        $.ajax({
            url: timerUrl,
            type: 'POST',
            data: {
                'csrfmiddlewaretoken': csrfToken
            },
            success: function (data) {
                //console.log("Respuesta de AJAX:", data);
                if (data.success) {
                    clearInterval(timerInterval); // Detener el intervalo al restablecer
                    timerInterval = setInterval(updateCounter, 1000); // Iniciar nuevamente
                    //console.log("Seconds: " + data.seconds);
                } else {
                    alert("Error al restablecer el contador.");
                }
            },
            error: function () {
                alert("Error en la solicitud AJAX");
                clearInterval(timerInterval); // Detener el intervalo en caso de error
            }
        });
    });

});