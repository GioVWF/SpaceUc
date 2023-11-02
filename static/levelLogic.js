$(document).ready(function(){
    let timerInterval;
    let timerUrl = $("#Counter").data("timer-url");
    let progress = $("#Counter").data("progress"); 
    let limitator = $("#Counter").data("limitator");
    let temp;
    let initTemp;
    let points;
    
    $.ajax({
        type: 'GET',
        url: timerUrl,
        success: function (response) {
            temp = response.live_counter;
            initTemp = temp;
            $('.counter').empty().append(temp);
        },
        error:function(response){
            alert("Contador no encontrado");
        }
    });

    timerInterval = setInterval(updateCounter, 1000);

    function updateCounter() {
        if(temp > 0){
            temp -= 1;
            $('.counter').empty().append(temp);
        }

        if (temp == 0){
            $('.counter').empty().append('TIEMPO!')
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
        
        openModal($(this).data('is-correct'));
    });     

    $('.close').click(function() {
        closeModal();
    });

    function openModal(boolean) {
        $('#myModal #modalstyles').removeClass(boolean == 'True' ? 'Incorrect' : 'Correct').addClass(boolean == 'True' ? 'Correct' : 'Incorrect')
        $('#myModal p').text(boolean == 'True' ? 'Correcto!' : 'Incorrecto!');
        $('#myModal').css('display', 'block');

        if (boolean == 'True' && progress == limitator){
            addPoints();
            console.log('puntos añadidos');
        } else if (boolean =='True' && progress != limitator) {
            clearInterval(timerInterval);
        }

    }

    function closeModal() {
        $('#myModal').css('display', 'none');
        let checkbox = $('.modal-content').find('input[type="checkbox"]');
        checkbox.prop('checked', false);
    }
});