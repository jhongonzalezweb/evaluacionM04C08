
let inputPrincipal = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    };
    crearDiv(miParamTarea) {
        let inputItem = document.createElement("input");
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = miParamTarea;
        let crearDiv = document.createElement("div");
        crearDiv.classList.add("Item");
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        botonEditar.classList.add("boton-editar");
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");
        crearDiv.appendChild(inputItem);
        crearDiv.appendChild(botonEditar);
        crearDiv.appendChild(botonRemover);
        container.appendChild(crearDiv);

        botonEditar.addEventListener("click", () => {
            inputItem.disabled = !inputItem.disabled;
            if (inputItem.disabled === false) {
                botonEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>'
            } else {
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
            }
        })

        botonRemover.addEventListener("click", () => {
            inputItem.style = "display : none"
            botonEditar.style = "display : none"
            botonRemover.style = "display : none"
        })
    }
}

botonAgregar.addEventListener("click", () => {
    chequearInput()
})

function chequearInput() {
    if (inputPrincipal.value) {
        let nuevaTarea = inputPrincipal.value;
        new Item(nuevaTarea);
        inputPrincipal.value = "";
    };
}
