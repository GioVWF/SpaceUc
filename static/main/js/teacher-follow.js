const viewStudent = async (id_student) => {

    const response = await fetch(`/get_info_student_/${id_student}`);
    const data = await response.json();
    


    const details = data;
    console.log(details)
    if (details.message == "Found it") {
        const detailsHtml = `
            
            <p class = "title_student" >Estudiante ${details.first_name_user} ${details.last_name_user}</p>
            <div class = "svg_icon_container">

                <div class = "head_icon" >
                    ${details.head_svg} 
        
                </div>

                <div class = "body_icon" >
                    ${details.body_svg}
                </div>

                <div class = "background_icon" >
                    ${details.background_svg}
                </div>
            </div>

            <div class = "container_text">
                <p class = "text_student" >RUN: ${details.run_user}</p>
            </div>
            
            <div class = "container_text">
                <p class = "text_student">Nombre de usuario: ${details.alias_user}</p>
            </div>
                
            <div class = "container_text">
                <p class = "text_student">Grado: ${details.grade_user}</p>
            </div>

            <div class = "container_text">   
                <p class = "text_student">Puntos: ${details.point_user}</p>
            </div>
            
            
            
            
            
        `;
        // Insertar la información en el div "info_specific"
        const infoSpecificDiv = document.getElementById("info_specific");

        if (infoSpecificDiv) {
            infoSpecificDiv.innerHTML = detailsHtml;
        } else {
            console.error("Elemento 'info_specific' no encontrado en la página.");
        }
    }
    else{
        console.error("mi loco no lo ha pillao ")
    }






};

const deleteStudent = async (id_student) => {
    const response = await fetch(`/delete_student_/${id_student}`);
    if (response.ok) {
        
        console.log('Estudiante eliminado exitosamente');
        location.reload();
        
    } else {
        
        console.error('Error al eliminar estudiante');
    }
}





$(document).ready(function() {

    
    

    $('#searcher_form').submit(function(e) {
        e.preventDefault();
    
       
        var studentsTableDiv = $('#students_table');
        var mensajeDiv = studentsTableDiv.find('#mensajeDiv');
    
        if (!mensajeDiv.length) {
            mensajeDiv = $('<div>').attr('id', 'mensajeDiv');
            studentsTableDiv.append(mensajeDiv);
        }
    
        function openModal() {
           
            $('#myModal_nofinded').css('display', 'block');
            $('.second_son').css('z-index', '-1');
            
        }

        function closeModal() {
            $('.modal').css('display', 'none');
            $('.second_son').css('z-index', '2');
            
            
            
        }
        var searchTerm = $('#searcher').val().toLowerCase();
        var anyRowShown = false;
    
        $('#students_table tr:has(td)').each(function() {
            var row = $(this);
            var rowText = row.text().toLowerCase();
    
            var searchTerms = searchTerm.split(' ');
    
            var found = false;
    
            for (var i = 0; i < searchTerms.length; i++) {
                if (rowText.indexOf(searchTerms[i]) !== -1) {
                    found = true;
                    break;
                }
            }
    
            if (found) {
                row.show();
                anyRowShown = true;
            } else {
                row.hide();
            }
        });
    
       
        if (!anyRowShown) {
            openModal();
            
        } else {
            
        }
    });
    
    


    $("#filter_combobox").change(function () {
        var selectedValue = $(this).val();
    
        // Obtener las filas y filtrar solo las visibles
        var rows = $(".student-row:visible");
    
        // Ordenar las filas basándonos en el contenido de las celdas correspondientes
        if (selectedValue === 'firstName') {
            rows.sort(function (a, b) {
                var nameA = $(a).find(".first-name").text().toUpperCase();
                var nameB = $(b).find(".first-name").text().toUpperCase();
                return nameA.localeCompare(nameB);
            });
        } else if (selectedValue === 'lastName') {
            rows.sort(function (a, b) {
                var lastNameA = $(a).find(".last-name").text().toUpperCase();
                var lastNameB = $(b).find(".last-name").text().toUpperCase();
                return lastNameA.localeCompare(lastNameB);
            });
        }
    
        // Mostrar las filas ordenadas
        rows.detach().appendTo("#students_table tbody").show();
    });
    
});








