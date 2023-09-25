document.addEventListener("DOMContentLoaded", function() {
    // Rut
    const rutInput = document.getElementById('rut');
    const rutLabel = document.getElementById('label_rut');

    rutInput.addEventListener('focus', function() {
        rutLabel.style.transition = 'opacity 0.2s';
        rutLabel.style.opacity = 0;
    });

    rutInput.addEventListener('input', function() {
        if (rutInput.value.trim() !== '') {
            rutLabel.style.opacity = 0;
        } else {
            rutLabel.style.opacity = 1;
        }
    });

    // Contraseña
    const passwordInput = document.getElementById('password');
    const passwordLabel = document.getElementById('label_password');

    passwordInput.addEventListener('focus', function() {
        passwordLabel.style.transition = 'opacity 0.2s';
        passwordLabel.style.opacity = 0;
    });

    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() !== '') {
            passwordLabel.style.opacity = 0;
        } else {
            passwordLabel.style.opacity = 1;
        }
    });

    // Agrega otros campos de entrada (input) y sus etiquetas (label) aquí

});