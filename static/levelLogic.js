$(document).ready(function () {
    let lesson = $("#level-info").data("lesson");
    let timerUrl = $("#Counter").data("timer-url");
    let progress = $("#Counter").data("progress");
    let limitator = $("#Counter").data("limitator");
    let temp;
    let crono;
    let IsClickable = false;
    let points;
    let iscorrect;
    let nextUrl = $("#modalButton").data("next-url");
    let gameUrl = $("#modalButton").data("game-url");
    let timerInterval;

    const retryButton = document.getElementById('modalButton');
    const playButton = document.getElementById('playButton');
    const song = document.getElementById('song');
    const ctrlIcon = document.getElementById('ctrlIcon');

    $.ajax({
        type: 'GET',
        url: timerUrl,
        success: function (response) {
            temp = response.live_counter;
            crono = response.cronometer;
            initTemp = temp;
            $('.counter').empty().append(crono);
        },
        error: function (response) {
            alert("Contador no encontrado");
        }
    });

    function updateCounter() {
        if (temp > 0) {
            let minutes = Math.floor(temp / 60);
            let seconds = temp % 60;
            let cronometer = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            $('.counter').empty().append(cronometer);
            temp--;
        }

        if (temp == 0) {
            $('.counter').empty().append('0:00')
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
                'progress': progress,
            },
            success: function () {
                clearInterval(timerInterval)
            },
            error: function () {
                alert("Error en la solicitud AJAX");
            }
        });
    }

    $('.Answer').click(function () {
        if (IsClickable) {
            let checkbox = $(this).siblings('input[type="checkbox"]');
            checkbox.prop('checked', true);

            openModal($(this).data('is-correct'), $(this).data('content-answer'));
        } else if (!IsClickable) {
            alert('Debes Terminar De escuchar el Audio!');
        }

    });

    $('.close').click(function () {
        if ($('.close').hasClass('audio')) {
            IsClickable = true;
            if (!timerInterval) {
                timerInterval = setInterval(updateCounter, 1000);
            }
            $('.close').removeClass('initModal');
        }

        closeModal();
    });

    function openModal(boolean, content) {
        $('#myModal .close').removeClass(boolean != 'audio' ? 'audio' : '').addClass(boolean == 'audio' ? 'audio' : '');
        $('#myModal #modalstyles').removeClass(boolean == 'True' ? 'Incorrect audioText' : 'Correct audioText').addClass(boolean == 'True' ? 'Correct' : boolean == 'audio' ? 'audioText' : 'Incorrect');
        $('#myModal #answerIsCorrect').text(boolean == 'True' ? '¡Correcto!' : boolean == 'audio' ? '' : '¡Incorrecto!');
        $('#myModal p').text(content);

        if (boolean == 'False') {
            $('#myModal #modalButton').text("REINTENTAR").removeClass('hide').removeClass('correct-button').addClass('incorrect-button');
            $('#myModal #grid-stats').removeClass('stats-grid');
            $('#myModal h3').addClass('hide').removeClass('stats-text');
            iscorrect = false;
        } else if (boolean == 'True') {
            $('#myModal #modalButton').text("SIGUIENTE").removeClass('hide').addClass('correct-button');
            $('#myModal #grid-stats').addClass('stats-grid');
            $('#myModal h3').removeClass('hide').addClass('stats-text');
            iscorrect = true;
        } else if (boolean == 'audio') {
            $('#grid-stats').addClass('audio-grid');
            $('#grid-stats').append('<button id="si" class="correct-button removable">SI</button>');
            $('#grid-stats').append('<button id="no" class="incorrect-button removable" on>NO</button>');
        }

        $('#myModal #Time').text('Tiempo: ' + (120 - temp) + ' segundos.');

        if (boolean == 'True' && progress < limitator) {
            addPoints();
            $('#myModal #Points').text('Puntos: ' + points + ' puntos.');
            console.log('puntos añadidos');
        } else if (boolean == 'True' && progress >= limitator) {
            clearInterval(timerInterval);
            $('#myModal #Points').text('No puedes ganar más puntos.');
        }

        $('#myModal').css('display', 'block');

    }

    function closeModal() {
        $('#myModal').css('display', 'none');
        $('#grid-stats').removeClass('audio-grid');
        $('.removable').remove();

        let checkbox = $('.modal-content').find('input[type="checkbox"]');
        checkbox.prop('checked', false);
    }

    playButton.onclick = PlayPause;

    function PlayPause() {
        if (ctrlIcon.classList.contains('fa-pause')) {
            song.pause();
            stopIntervalSong();
            ctrlIcon.classList.remove('fa-pause');
            ctrlIcon.classList.add('fa-play');
        } else if (ctrlIcon.classList.contains('fa-rotate-left')) {
            song.play();
            startIntervalSong();
            ctrlIcon.classList.remove('fa-rotate-left');
            ctrlIcon.classList.add('fa-pause');
        } else {
            song.play();
            startIntervalSong();
            ctrlIcon.classList.remove('fa-play');
            ctrlIcon.classList.add('fa-pause');
        }
    }

    function startIntervalSong() {
        intervalSong = setInterval(() => {
            if (song.currentTime == song.duration) {
                ctrlIcon.classList.remove('fa-pause');
                ctrlIcon.classList.add('fa-rotate-left');
                stopIntervalSong();
                IsClickable = true;
                if (!timerInterval) {
                    timerInterval = setInterval(updateCounter, 1000);
                }
            };
        }, 500);
    }

    function stopIntervalSong() {
        clearInterval(intervalSong);
    }

    retryButton.onclick = function () {
        if (iscorrect) {
            if (lesson != 3) {
                window.location.href = nextUrl;
            }
            else {
                window.location.href = gameUrl;
            }
        } else if (!iscorrect) {
            closeModal();
        }
    };

    $('#grid-stats').on('click', '#si', function () {
        closeModal();
        PlayPause();
    });

    $('#grid-stats').on('click', '#no', function () {
        IsClickable = true;
        closeModal();
        if (!timerInterval) {
            timerInterval = setInterval(updateCounter, 1000);
        }
    });

    $('.close').addClass('initModal');
    openModal('audio', '¿Quieres escuchar el audio de la pregunta?');
});