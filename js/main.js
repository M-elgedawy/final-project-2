let btn =document.querySelector('.gedo2');
let input =document.querySelector('.gedo');
let div = document.querySelector('.task');
let divtask=document.querySelector('.allTasks')
 btn.onclick=function (){
     
     div.remove();
     let taskdata =input.value;

     divtask.innerHTML+= `<div class='alert alert-info  '>${taskdata} 
     <button class='btn btn-danger delete float-right '>DELETE</button></div>`
    
 }
 document.addEventListener('click',function(e){
     if(e.target.classList.contains('delete')){
         e.target.parentElement.remove();
     }

 })