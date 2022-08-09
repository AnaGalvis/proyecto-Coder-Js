let title = document.getElementById("title")
title.textContent = "Deja tu Resena";



//creo un arreglo y le pusheo 3 elementos de tipo string
let arreglo_items = new Array();
arreglo_items.push("100% recomendado");
arreglo_items.push("repetiremos sin duda");
arreglo_items.push("todo bien")




let lista = document.createElement("ul");

document.body.appendChild(lista);


for (let i = 0 ; i < arreglo_items.length;i++){


    let item = arreglo_items[i];
    agregar_item(item);


}

let input = document.getElementById("Review");


function mostrar_item(){


    if (input.value.trim() != "") {

        agregar_item(input.value);
        input.value = "" ;
    }

}



input.addEventListener("input", () => {
     console.log(input.value)
})




boton.onclick = () => {console.log("Click")}
boton.onmousemove = () => {console.log("Move")}







function  agregar_item (item){

    let  li = document.createElement("li");
    li.textContent = item ;

    lista.appendChild(li);





}





document.getElementById("logo").animate([
    { transform: 'translatex(0px)' }, 
    { transform: 'translatex(300px)'},
    { transform: 'translatex(0px)' }, 
  ], { 
    duration: 5000,
    iterations: Infinity
});



