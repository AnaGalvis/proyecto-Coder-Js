/* ----------------------------- MIS CONSTANTES ----------------------------- */
const nombreIngresado = prompt("Ingresa tu nombre").toLowerCase();
const apellidoIngresado = prompt("Ingresar Apellido").toLowerCase();
const NumeroIngresado = parseInt(prompt("Ingresar su numero telefonico"));
const direccion = prompt("Ingresar direccion");
const hoy = new Date();
const misProductos = [];
const VALOR_DELIVERY = 460;
const DESCUENTO = 100;

/* --------------------------------- CLASES --------------------------------- */
class Producto {
	constructor(id, nombre, precio) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
	}

	mostrarDescripcionCompleta() {
		return `${this.id}) ${this.nombre} $${this.precio}\n`;
	}
}

/* -------------------------------- FUNCIONES ------------------------------- */
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const mostrarMenu = () => {
	let menu = "";
	misProductos.forEach((producto) => {
		menu += producto.mostrarDescripcionCompleta();
	});
	return menu;
};

const calcularTotal = (producto, VALOR_DELIVERY, DESCUENTO) => {
	return restar(sumar(producto.precio, VALOR_DELIVERY), DESCUENTO);
};

const mostrarPedido = (nombreCliente, nombreProducto, precio) => {
	alert(
		`${nombreCliente} Ud acaba de ordenar ${nombreProducto}, Su total es: $${precio}`,
	);
};

/* --------------------------- LÓGICA DEL PROGRAMA -------------------------- */

productos.forEach((producto) => {
	misProductos.push(
		new Producto(producto.id, producto.nombre, producto.precio),
	);
});

alert("Bienvenido a Vamos Vegan " + hoy.toLocaleString());

const respuesta = parseInt(prompt("1) Ver Menu \n 2) No, quizas mas tarde "));

if (respuesta === 1) {
	alert(
		" Vamos Vegan Menu: \n" +
			mostrarMenu() +
			"  les gustaria ingresar algun producto? ",
	);

	valorElegido = parseInt(prompt(" Que producto desea ingresar? "));
	const productoSeleccionado = misProductos[valorElegido - 1];
	const total = calcularTotal(productoSeleccionado, VALOR_DELIVERY, DESCUENTO);
	mostrarPedido(nombreIngresado, productoSeleccionado.nombre, total);

} else if (respuesta === 2) {
	alert("Bienvenido, Sigue mirando!");
} else {
	alert("No ingreso un dato valido");
}