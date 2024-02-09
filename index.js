let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let divContainer = document.querySelector(".container")


class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        // this.inputItem = nuevaTarea
        inputItem.value = nuevaTarea;

        
    

        let div = document.createElement("div");
        div.classList.add("item")

        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        botonEditar.addEventListener("click",function(){
        inputItem.disabled = !inputItem.disabled
        if (inputItem.disabled) {
            botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
          } else {
            botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
          }
        })


        let botonRemover = document.createElement("button");
        botonRemover.classList.add("boton-remover")
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.addEventListener("click", function() {
        inputItem.remove();
        botonEditar.remove();
        botonRemover.remove();

        });

        
        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)

        divContainer.appendChild(div) 
    }
}




function chequearInput(){
    if(inputPrincipal.value !== ""){
        let nuevaTarea = new Item(inputPrincipal.value)
        inputPrincipal.value = ""
    }
}

botonAgregar.addEventListener("click",chequearInput)







