

function selection_head(option){
    document.getElementById("head_final_election").value = option;
};


function selection_body(option){
    document.getElementById("body_final_election").value = option;
};


function selection_backgraund(option){
    document.getElementById("backgraund_final_election").value = option;
};


function selection_color(option){
    document.getElementById("color_election_final").value = option;
}

    

    
    const li = document.querySelectorAll('.li')
    const block = document.querySelectorAll('.block')
    var head = document.getElementById('color_head')
    var body = document.getElementById('color_body')
    var backgraund = document.getElementById('color_backgraund')

    li.forEach ((eachLi , i) => {

        li[i].addEventListener('click', () => {

            li.forEach( (eachLi , i ) =>{
                li[i].classList.remove('active')
                block[i].classList.remove('active')
                head.classList.remove('active')
                body.classList.remove('active')
                backgraund.classList.remove('active')
            })

            li[i].classList.add('active')
            block[i].classList.add('active')


            if (i == 0){
                head.classList.add('active')
            }
            if( i == 1){
                body.classList.add('active')
            }
            if( i == 2 ){
                backgraund.classList.add('active')
            }
        })

    })



    
