let imagen = document.querySelectorAll('.img0');
let modal = document.querySelector('#mimodal');
let img = document.querySelector('.modal-contenido');
let boton = document.querySelector('#close');
let midesc = document.getElementById('descripcion');
//lengyh va a leer la cantidad de imagenes que tengo
for (let i = 0; i < imagen.length; i++){
    
    midesc.innerHTML= i;
    //cada vez que de click creara una funcion 
imagen[i].addEventListener('click', function(e){
    //cuando le de click se le aplicara una clase a mi modal
    //yo cree una clase llamada mortrar
    //decidi optar por cambiar el estilo porque no volvia a habrir y no tengo ni idea el porque
    modal.style.display = "block";
/*  modal.classList.toggle("mostrar");  */
 //ahora con esto leemmos que imagen tiene
 //obten la rurta de la imagen que di click
 let srcs = e.target.src;
 //se cambia los atributos del src por srcs
 img.setAttribute("src", srcs);
 
 
 
});
}
/* boton.addEventListener('click', function () {
    modal.classList.toggle("modal-ocultar");
    
}); */

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 