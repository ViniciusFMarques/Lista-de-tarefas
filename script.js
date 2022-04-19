"use strict";

function excluirElemento(e){
    let pai = e.target.parentNode;
    pai.remove();
}

function adicionarElemento(){   
    let text = document.querySelector("#newTask").value;

    if(text === "" || text === null || text === undefined){
        alert("Digite uma tarefa válida");
    }
    else{
        let div_lista = document.querySelector("#list");
        let div = document.createElement("div");
        let p = document.createElement("p");
        let task = document.createTextNode(text);
        let img = document.createElement("img");
        img.classList = "remove-icon";
        img.setAttribute("src", "./assets/lixeira.png");
        img.addEventListener("click", excluirElemento);
        div.classList = "list-item";   
        div_lista.appendChild(div);
        div.appendChild(p);
        div.appendChild(img);
        p.appendChild(task);
    }
    document.querySelector("#newTask").value = "";

}

let salvar = document.getElementById("submit")

salvar.addEventListener("click", adicionarElemento);



