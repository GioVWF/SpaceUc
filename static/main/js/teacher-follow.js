const viewStudent = async (id_student) => {

    const response = await fetch(`/get_info_student_/${id_student}`);
    const data = await response.json();
    


    const details = data;
    console.log(details)
    if (details.message == "Found it") {
        const detailsHtml = `
            <p>Nombre: ${details.first_name_user} ${details.last_name_user}</p>
            <p>RUN: ${details.run_user}</p>
            <p>Alias: ${details.alias_user}</p>
            <p>Grado: ${details.grade_user}</p>
            <p>Puntos: ${details.point_user}</p>
            <div class = "chiquito">
                ${details.head_svg}
                ${details.body_svg}
                ${details.background_svg}
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




