//construyo una clase creadora de objetos
class Lentes {
	constructor(id, img, nombre, marca, modelo, color, precio, stock) {
		this.id = id;
		this.img = img;
		this.nombre = nombre;
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
}
//creacion de objetos de la clase Lentes
const armazon1 = new Lentes(
	100,
	"../img/aviadorBless.jpg",
	"Armazón",
	"Bless",
	"Aviador",
	"Negro",
	7500,
	10,
);
const armazon2 = new Lentes(
	101,
	"../img/davorHSol.jpg",
	"Lentes de Sol",
	"Davor",
	"Envolvente",
	"Negro",
	7500,
	10,
);
const armazon3 = new Lentes(
	102,
	"../img/hexagonalBless.jpg",
	"Armazón",
	"Bless",
	"Hexagonal",
	"Dos colores",
	6500,
	10,
);
const armazon4 = new Lentes(
	103,
	"../img/pinUp.jpg",
	"Armazón",
	"Bless",
	"Pin Up",
	"Dorado y Negro",
	9000,
	10,
);
const armazon5 = new Lentes(
	104,
	"../img/solMildura.jpg",
	"Lentes de Sol",
	"Mildura",
	"Pin Up",
	"Dorado y Rosa",
	10500,
	10,
);
const armazon6 = new Lentes(
	105,
	"../img/solMuzik.jpg",
	"Lentes de Sol",
	"Muzik",
	"Wayfarer",
	"Negro",
	8500,
	10,
);
let lentesDisponibles = [
	armazon1,
	armazon2,
	armazon3,
	armazon4,
	armazon5,
	armazon6,
];

const cargarProductos = () => {
	if (!JSON.parse(localStorage.getItem("lentesDisponibles"))) {
		localStorage.setItem("lentesDisponibles", JSON.stringify(lentesDisponibles));
	}
};

cargarProductos();
