$(document).ready(function(){
    let timerInterval;
    let timerUrl = $("#Counter").data("timer-url");
    let progress = $("#Counter").data("progress"); 
    let limitator = $("#Counter").data("limitator");
    let temp;
    let crono;
    let initTemp;
    let points;
    let iscorrect;

    const retryButton = document.getElementById('modalButton');

    $.ajax({
        type: 'GET',
        url: timerUrl,
        success: function (response) {
            temp = response.live_counter;
            crono = response.cronometer;
            initTemp = temp;
            $('.counter').empty().append(crono);
        },
        error:function(response){
            alert("Contador no encontrado");
        }
    });

    timerInterval = setInterval(updateCounter, 1000);

    function updateCounter() {
        if(temp > 0){
            let minutes = Math.floor(temp / 60);
            let seconds = temp % 60;
            let cronometer = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            $('.counter').empty().append(cronometer);
            temp--;
        }

        if (temp == 0){
            $('.counter').empty().append('00:00')
        }
    };
    
    function addPoints() {
        points = temp * 2;
        progress += 1;
        $.ajax({
            url: timerUrl,
            type: 'POST',
            data: {
                'csrfmiddlewaretoken': csrfToken,
                'points': points,
                'progress': progress
            },
            success: function() {
                clearInterval(timerInterval)
            },
            error: function () {
                alert("Error en la solicitud AJAX");
            }
        });
    }

    //  
    //     $.ajax({
    //         url: timerUrl,
    //         type: 'POST',
    //         data: {
    //             'csrfmiddlewaretoken': csrfToken
    //         },
    //         success: function (data) {
    //             console.log("Respuesta de AJAX:", data);
    //             if (data.success) {
    //                 clearInterval(timerInterval); // Detener el intervalo al restablecer
    //                 timerInterval = setInterval(updateCounter, 1000); // Iniciar nuevamente
    //                 console.log("Seconds: " + data.seconds);
    //             } else {
    //                 alert("Error al restablecer el contador.");
    //             }
    //         },
    //         error: function () {
    //             alert("Error en la solicitud AJAX");
    //             clearInterval(timerInterval); // Detener el intervalo en caso de error
    //         }
    //     });
    // });

    $('.Answer').click(function() {
        let checkbox = $(this).siblings('input[type="checkbox"]');
        checkbox.prop('checked', true);
        
        openModal($(this).data('is-correct'), $(this).data('content-answer'));
    });     

    $('.close').click(function() {
        closeModal();
    });

    function openModal(boolean, content) {
        $('#myModal #modalstyles').removeClass(boolean == 'True' ? 'Incorrect' : 'Correct').addClass(boolean == 'True' ? 'Correct' : 'Incorrect')
        $('#myModal #answerIsCorrect').text(boolean == 'True' ? 'Correcto!' : 'Incorrecto!');
        $('#myModal p').text(content);
       
        if (boolean != 'True'){
            $('#myModal #modalButton').text("REINTENTAR").removeClass('hide').removeClass('correct-button').addClass('incorrect-button');
            $('#myModal #grid-stats').removeClass('stats-grid');
            $('#myModal h3').addClass('hide').removeClass('stats-text');
            
            iscorrect = false;
        } else if (boolean == 'True') {
            $('#myModal #modalButton').text("SIGUIENTE").removeClass('hide').addClass('correct-button');
            $('#myModal #grid-stats').addClass('stats-grid');
            $('#myModal h3').removeClass('hide').addClass('stats-text');
            iscorrect = true;
        }

        $('#myModal #Time').text('Tiempo: ' + (120 - temp) + ' segundos.');
        

        if (boolean == 'True' && progress == limitator){
            addPoints();
            $('#myModal #Points').text('Puntos: ' + points + ' puntos.');
            console.log('puntos añadidos');
        } else if (boolean =='True' && progress != limitator) {
            clearInterval(timerInterval);
            $('#myModal #Points').text('No puedes ganar más puntos.');
        }

        $('#myModal').css('display', 'block');

    }

    function closeModal() {
        $('#myModal').css('display', 'none');
        let checkbox = $('.modal-content').find('input[type="checkbox"]');
        checkbox.prop('checked', false);
    }

    retryButton.onclick = function(){
        if (iscorrect){
            console.log('BOTON SIGUIENTE PRESIONADO!');
        } else if (!iscorrect) {
            location.reload();
        }
    };
});