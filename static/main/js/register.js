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

    rutInput.addEventListener('blur', function() {
        if (rutInput.value.trim() === '') {
            rutLabel.style.opacity = 1;
        }
    });

    // Name
    const nameInput = document.getElementById('name_student');
    const nameLabel = document.getElementById('label_name_student');

    nameInput.addEventListener('focus', function() {
        nameLabel.style.transition = 'opacity 0.2s';
        nameLabel.style.opacity = 0;
    });

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() !== '') {
            nameLabel.style.opacity = 0;
        } else {
            nameLabel.style.opacity = 1;
        }
    });

    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            nameLabel.style.opacity = 1;
        }
    });

     // Lastname
     const lastNameInput = document.getElementById('last_name');
     const lastNameLabel = document.getElementById('label_last_name');
 
     lastNameInput.addEventListener('focus', function() {
         lastNameLabel.style.transition = 'opacity 0.2s';
         lastNameLabel.style.opacity = 0;
     });
 
     lastNameInput.addEventListener('input', function() {
         if (lastNameInput.value.trim() !== '') {
             lastNameLabel.style.opacity = 0;
         } else {
             lastNameLabel.style.opacity = 1;
         }
     });
 
     lastNameInput.addEventListener('blur', function() {
         if (lastNameInput.value.trim() === '') {
             lastNameLabel.style.opacity = 1;
         }
     });

});