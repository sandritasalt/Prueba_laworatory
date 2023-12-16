//para abrir y cerrar el menú desplegable según los botones asignados(.abrir y .cerrar):
const listado = document.querySelector("nav");
const botonAbrir = document.querySelector(".abrir");
const botonCerrar = document.querySelector(".cerrar");


if(botonAbrir){
  botonAbrir.addEventListener("click",function(){
      listado.classList.toggle("desplegado");
    }); 

    botonCerrar.addEventListener("click",function(){
      listado.classList.toggle("desplegado");
    }); 
};






//para que aparezcan los elementos al hacer scroll

// Obtenemos los elementos a mostrar
var elementos = document.getElementsByClassName('elemento');

// Función para verificar si un elemento está visible en la ventana
function elementoVisible(elemento) {
  var posicionElemento = elemento.offsetTop;
  var alturaVentana = window.innerHeight;
  var posicionScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  return (posicionScroll > posicionElemento - alturaVentana);
}

// Función para mostrar los elementos visibles
function mostrarElementos() {
  for (var i = 0; i < elementos.length; i++) {
    if (elementoVisible(elementos[i])) {
      elementos[i].style.opacity = 1;
    }
  }
}

// Agregamos el evento scroll al objeto window
window.addEventListener('scroll', mostrarElementos);

// Mostramos los elementos visibles al cargar la página
mostrarElementos();




