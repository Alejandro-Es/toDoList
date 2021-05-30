function changeTab(evt, tabs) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabs).style.display = "flex";
    evt.currentTarget.className += " active";
    document.getElementById("container-lista").classList.add("container")
}

const listaTareas = document.getElementById("lista");
const titulo = document.getElementById("titulo");
const hora = document.getElementById("hora");
const prioridad = document.getElementsByName("prioridad");
const comentarios = document.getElementById("comentarios");
const btnAgregar = document.getElementById("btn-agregar");

class Tarea {
  constructor(titulo, hora, prioridad, comentarios) {
    this.titulo = titulo;
    this.hora = hora;
    this.prioridad = prioridad;
    this.comentarios = comentarios;
  }
}

let definirPrioridad
const crearTarea = (div, {titulo, hora, prioridad, comentarios }) => {
  div.innerHTML += `
  <div class="nueva-tarea">
        <div class="prioridad-tarea">
            <h4>${hora}</h4>
            <h5>${prioridad}</h5>
        </div>
        <div>
            <h3>${titulo}</h3>
            <p>${comentarios}</p>
        </div>
    </div>
  `;
}

btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < prioridad.length; i++) {
    
    if (prioridad[i].checked){
      const tarea = new Tarea(
        titulo.value, 
        hora.value,
        prioridad[i].value,
        comentarios.value
      );
      definirPrioridad = tarea.prioridad;
      crearTarea(listaTareas, tarea);
      clearInput();
    }
  }
})

btnAgregar.addEventListener("click", (e) => {
  const classPrioridad = document.getElementsByClassName("prioridad-tarea")
  classPrioridad.classList.add("prioridad")
})

const clearInput = () => {
  const inputs = document.querySelectorAll("input[type=text]");
  inputs.forEach((item) => (item.value = null));
};