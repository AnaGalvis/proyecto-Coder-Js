/** Mis Constantes */
const nombreIngresado = prompt("Ingresa tu nombre") 
const apellidoIngresado= prompt ("Ingresar Apellido")
const direccion = prompt ("Ingresar direccion")
const NumeroIngresado = parseInt(prompt("Ingresar su numero telefonico"));
const precio1 = 700
const precio2 = 1100
const precio3 = 1200
const precio4 = 1650
const delivery = 460;
const suma = (a,b) => a + b
const resta = (a,b) => a-b 
const descuento = 100;


let nombre_convertido = nombreIngresado.toLowerCase();
        if (nombre_convertido == "Maria"){
        alert("El nombre ingresado es Maria"); 
        }else{
        alert("El nombre ingresado es " + nombreIngresado); 
        }


        if (isNaN(NumeroIngresado)){
                
        alert("No ingresaste un dato numerico") ;
        }
        else{
        confirm ("confime numero telefonico" + NumeroIngresado)
        }     
            

/** Clases */   
class producto {
 constructor( id, nombreProducto, precio,){
    this.nombreProducto= nombreProducto;
    this.precio = precio;
    this.id = id;
 }

mostrar_descripcion_completa(){
return this.id + this.nombreProducto + " $" + this.precio+ "\n";
}
}

 let mis_productos= new Array();
 let producto1 = new producto("1)", "Avocado Brusqueta con tomates confitados", precio1,);
 let producto2 = new producto("2)", "Las triplets toasts", precio2,);
 let producto3 = new producto("3)", "Pizza de ahuyama", precio2);
 let producto4 = new producto("4)", "The queen Burguer", precio3);
 let producto5 = new producto("5)", "Tacos to share", precio4);
 let producto6 = new producto("6)", "Brunch for the team", precio4);

 mis_productos.push(producto1);
 mis_productos.push(producto2);
 mis_productos.push(producto3);
 mis_productos.push(producto4);
 mis_productos.push(producto5);
 mis_productos.push(producto6);

 const hoy = new Date();

alert ("Bienvenido a Vamos Vegan " +hoy.toLocaleString())

let respuesta = prompt("Estas listo para ver el menu? \n 1) Ver Menu \n 2) No, quizas mas tarde ");

    if (respuesta == "1"){
        alert (" Vamos Vegan Menu: \n" +mostrar_menu() + "  les gustaria ingresar algun producto? ")

        result = prompt( " Que producto desea ingresar? ")

        resp = prompt ( " Que producto desea ingresar? ")


    switch (resp){

        case "1" : 
                operacion1();
                break;
        case "2" :          
                operacion2();
                break;
        case "3" :
                operacion3()
                break;
        case "4" :
                operacion4()
                break;
        case "5" :
                operacion5()
                break;
        case "6" :
                operacion6
                break;   
        default : 
                alert ("No ingreso una opcion valida") ;                     


    }

      }else if(respuesta == "2"){
       alert ("Bienvenido, Sigue mirando!")
   
      }else{
      alert ("No ingreso un dato valido")
      }
    
      
   

 /** Mis Funciones */
function mostrar_menu(){
    let menu = "";
    for (let i= 0; i< mis_productos.length; i++){
        menu += mis_productos[i].mostrar_descripcion_completa();

    }
return menu;
 }

function operacion1(){
        let total1 = precio1 + delivery;
        let precioTotal1 = resta (suma (total1, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de pedir un Avocado Brusqueta Su total es: "  + precioTotal1 + " su delivery tardara llegara entre 30-45 minutos. Gracias por la compra" );  
        confirm ("Confirma que su direccion es: " + direccion)    
}
function operacion2(){
        let total2 = precio2 + delivery;
        let precioTotal2 = resta (suma (total2, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de ordenar las triplets toastsa Su total es: "  + precioTotal2 + " su delivery tardara entre 30-45 minutos. Gracias por la compra" );
        confirm ("Confirma que su direccion es: " + direccion)    
}
function operacion3(){
        let total2 = precio2 + delivery;
        let precioTotal2 = resta (suma (total2, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de ordenar una Pizza de Ahuyama "  + precioTotal2 + " su delivery tardara entre 30-45 minutos. Gracias por la compra" );
        confirm ("Confirma que su direccion es: " + direccion)    
}
function operacion4(){
        let total4 = precio4 + delivery;
        let precioTotal4 = resta (suma (total4, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de ordenar The Queen Burguer, Su total es: $"  + precioTotal4 + " su delivery tardara entre 30-45 minutos. Gracias por la compra" );
        confirm ("Confirma que su direccion es: " + direccion)    
}
function operacion5(){
        let total5 = precio5 + delivery;
        let precioTotal5 = resta (suma (total5, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de ordenar The tacos to SHARE, Su total es: $"  + precioTotal5 + " su delivery tardara entre 30-45 minutos. Gracias por la compra" );
        confirm ("Confirma que su direccion es: " + direccion)    
}
function operacion6(){
        let total5 = precio5 + delivery;
        let precioTotal5 = resta (suma (total5, delivery), descuento)
        alert (nombreIngresado + " Ud acaba de ordenar The brunch for the Team, Su total es: $"  + precioTotal5 + " su delivery tardara entre 30-45 minutos. Gracias por la compra" );
        confirm ("Confirma que su direccion es: " + direccion)    
}
