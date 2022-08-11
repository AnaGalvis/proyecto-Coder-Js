
let title = document.getElementById("title")
title.textContent = "Deja tu Resena";

//creo un arreglo y le pusheo 3 elementos de tipo string
let arreglo_items = new Array();
arreglo_items.push("100% recomendado");
arreglo_items.push("repetiremos sin duda");
arreglo_items.push("todo bien")

let lista = document.createElement("ul");

document.body.appendChild(lista);

for (let i = 0 ; i < arreglo_items.length; i++){


    let item = arreglo_items[i];
    agregar_item(item);


}

let input = document.getElementById("Review");

let botton= document.getElementById("addComentario");
botton.addEventListener("click",()=>{
    mostrar_item();
    })




function mostrar_item(){


    if (input.value.trim() != "") {

        agregar_item(input.value);
        input.value = "" ;
    }else{
        alert("No ingresaste un dato validp");
    }

}


function  agregar_item (item){

    let  li = document.createElement("li");
    li.textContent = item ;

    lista.appendChild(li);    

}

