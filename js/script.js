
 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             /*Se crea un boton HTML  que servira como el boton de marcar la tarea como realizada
             y se agrega al elemento li de la lista*/
             let checkButton = document.createElement("button");
             checkButton.innerHTML = "Hecho";
             element.appendChild(checkButton);
             /*Se agrega el evento al boton de chequear la tarea, cambiando el estilo de texto 
             a linea cruzada si se da click al boton*/
             checkButton.addEventListener("click", () => {
                 element.style.textDecoration = "line-through";
             });
             /*Se crea un boton HTML  que servira como el boton de borrar la tarea
             y se agrega al elemento li de la lista*/
             let deleteButton = document.createElement("button");
             deleteButton.innerHTML = "Borrar";
             /*Se agrega el evento al boton de chequear la tarea, borrando el elemento li de la lista
             en caso que se de click al boton correspondiente*/
             deleteButton.addEventListener("click", () => {
                element.remove();
             });
             element.appendChild(deleteButton);
             //Se crea un nodo de texto para el elemento li de la lista, que renderiza la tarea
             element.appendChild(document.createTextNode(task));
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }