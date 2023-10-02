var accordionBtn1 = document.getElementById('accordionBtn1');
    var accordionBtn2 = document.getElementById('accordionBtn2');
    var accordionBtn3 = document.getElementById('accordionBtn3');
    var accordionBtn4 = document.getElementById('accordionBtn4');
    var accordionBtn5 = document.getElementById('accordionBtn5');
    var title = document.getElementById('myTitle');
    var paragraph = document.getElementById('paragraph');

    accordionBtn1.addEventListener('click', function(){
       accordionBtn1.querySelector('#myBtn1').style.color= '#222757';
       accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
       accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
       accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
       accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

       title.textContent = 'Nivel 1';
       paragraph.textContent = 'Contenido Nivel 1';
       paragraph.classList.add('svg_paragraph');
    });

    accordionBtn2.addEventListener('click', function(){
       accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
       accordionBtn2.querySelector('#myBtn2').style.color= '#222757';
       accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
       accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
       accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

       title.textContent = 'Nivel 2';
       paragraph.textContent = 'Contenido Nivel 2';
       paragraph.classList.add('svg_paragraph');

    });

    accordionBtn3.addEventListener('click', function(){
       accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
       accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
       accordionBtn3.querySelector('#myBtn3').style.color= '#222757';
       accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
       accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

       title.textContent = 'Nivel 3';
       paragraph.textContent = 'Contenido Nivel 3';
       paragraph.classList.add('svg_paragraph');
    });
     
    accordionBtn3.removeEventListener;

    accordionBtn4.addEventListener('click', function(){
       accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
       accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
       accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
       accordionBtn4.querySelector('#myBtn4').style.color= '#222757';
       accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

       title.textContent = 'Nivel 4';
       paragraph.textContent = 'Contenido Nivel 4';
       paragraph.classList.add('svg_paragraph');
    });

    accordionBtn5.addEventListener('click', function(){
       accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
       accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
       accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
       accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
       accordionBtn5.querySelector('#myBtn5').style.color= '#222757';

       title.textContent = 'Nivel 5';
       paragraph.textContent = 'Contenido Nivel 5';
       paragraph.classList.add('svg_paragraph');
    });