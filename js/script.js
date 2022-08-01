const nombreIngresado = prompt("Ingresa tu nombre") 
const apellidoIngresado= prompt ("Ingresar Apellido")
const direccion = prompt ("Ingresar direccion")

    
class producto {
 constructor(id, nombreProducto, precio,){
    this.id = id;
    this.nombreProducto= nombreProducto;
    this.precio = precio;
 }


mostrar_descripcion_completa(){
return this.id + this.nombreProducto + " $" + this.precio ;
}
}



 let mis_productos= new Array();
 mis_productos.push(new producto("Platillo1","Avocado Brusqueta con tomates confitados", 700,));
 mis_productos.push(new producto("Platillo2","Las triplets toasts", 1000,));
 mis_productos.push(new producto("Platillo3","Pizza de ahuyama", 1100));
 mis_productos.push(new producto("Platillo4","The queen Burguer", 1200));
 mis_productos.push(new producto("Platillo5","Tacos to share", 1600));
 mis_productos.push(new producto("Platillo6","Brunch for the team", 1850));

 let respuesta = prompt("Estas listo para ver el menu? \n 1) Ver Menu \n 2) No, quizas mas tarde ");

    if (respuesta == "1"){
        alert (" Vamos Vegan Menu: \n" +mostrar_menu() + "  les gustaria ingresar algun producto? ")

   
      }else if(respuesta == "2"){
       alert ("Bienvenido, Sigue mirando!")
   
      }else{
      alert ("No ingreso un dato valido")
      }

 function mostrar_menu(){
    let menu = "";
    for (let i= 0; i< mis_productos.length; i++){
        menu += mis_productos[i].mostrar_descripcion_completa();

    
    }
return menu;
 }

 alert ("Para pedir por favor llama al 561 510 6372, Gracias")