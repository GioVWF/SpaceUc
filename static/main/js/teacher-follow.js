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
$(document).ready(function() {
    $('#searcher_form').submit(function(e) {
        e.preventDefault();

        var searchTerm = $('#searcher').val().toLowerCase();

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
            } else {
                row.hide();
            }
        });
    });
});








