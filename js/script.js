
const nombreIngresado = prompt("Ingresa tu nombre") 
const apellidoIngresado= prompt ("Ingresar Apellido")
const direccion = prompt ("Ingresar direccion")
const price = 1200

let quantity = parseInt(prompt ("cuantos productos desea hoy?"))

    if ( quantity> 0 ){
        let total = price * quantity;
        alert ("Su total es: "  +total +" mas un delivery de 460 y un descuento de 100 pesos por el dia de hoy");
        const suma = (a,b) => a + b
        const resta = (a,b) => a-b 
        const descuento = 100;
        const delivery = 460;

        let precioTotal = resta (suma (total, delivery), descuento)

        let respuesta = confirm("Confirma que todos los datos ingresados son correctos? "  + "  Nombre: " + nombreIngresado  + "  Direccion: " +direccion  + " Su total seria: " +precioTotal)
     alert ("Su delivery tardara entre 30-45 minutos. Gracias por su compra")

    }else{
        alert ("No ingresaste un dato valido")
    }




 
