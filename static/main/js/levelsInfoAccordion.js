$(document).ready(function(){
   let accordionBtn1 = document.getElementById('accordionBtn1');
   let accordionBtn2 = document.getElementById('accordionBtn2');
   let accordionBtn3 = document.getElementById('accordionBtn3');
   let accordionBtn4 = document.getElementById('accordionBtn4');
   let accordionBtn5 = document.getElementById('accordionBtn5');

   let levelInfo1 = $('#myTitle').data('info-1');
   let levelInfo2 = $('#info2').data('info-2');
   let levelInfo3 = $('#info3').data('info-3');
   let levelInfo4 = $('#info4').data('info-4');
   let levelInfo5 = $('#info5').data('info-5');


   let title = document.getElementById('myTitle');
   let paragraph = document.getElementById('paragraph');

   accordionBtn1.addEventListener('click', function(){
      accordionBtn1.querySelector('#myBtn1').style.color= '#222757';
      accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
      accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
      accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
      accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

      title.textContent = 'Nivel 1';
      paragraph.textContent = levelInfo1;
      paragraph.classList.add('svg_paragraph');
   });

   accordionBtn2.addEventListener('click', function(){
      accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
      accordionBtn2.querySelector('#myBtn2').style.color= '#222757';
      accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
      accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
      accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

      title.textContent = 'Nivel 2';
      paragraph.textContent = levelInfo2;
      paragraph.classList.add('svg_paragraph');

   });

   accordionBtn3.addEventListener('click', function(){
      accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
      accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
      accordionBtn3.querySelector('#myBtn3').style.color= '#222757';
      accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
      accordionBtn5.querySelector('#myBtn5').style.color= '#4D5C7D';

      title.textContent = 'Nivel 3';
      paragraph.textContent = levelInfo3;
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
      paragraph.textContent = levelInfo4;
      paragraph.classList.add('svg_paragraph');
   });

   accordionBtn5.addEventListener('click', function(){
      accordionBtn1.querySelector('#myBtn1').style.color= '#4D5C7D';
      accordionBtn2.querySelector('#myBtn2').style.color= '#4D5C7D';
      accordionBtn3.querySelector('#myBtn3').style.color= '#4D5C7D';
      accordionBtn4.querySelector('#myBtn4').style.color= '#4D5C7D';
      accordionBtn5.querySelector('#myBtn5').style.color= '#222757';

      title.textContent = 'Nivel 5';
      paragraph.textContent = levelInfo5;
      paragraph.classList.add('svg_paragraph');
   });
});