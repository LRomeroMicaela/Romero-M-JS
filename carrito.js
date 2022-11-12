//saco del localStorage el item seleccionado por el usuario
let almacenados = JSON.parse(localStorage.getItem("lentes"));
let seleccionadoIdStock = JSON.parse(localStorage.getItem("stockId"));
//const carrito = [] ;
//console.log (carrito);
// const carritoStockId = [];
// console.log(carritoStockId);

const carrito = JSON.parse(localStorage.getItem("lentes")) || [];
const select = document.getElementById("cantidadAComprar");
const boton = document.getElementById("hacerPedido");
let divConImg = ``;

const renderizarProductos = () => {
	const contenedor = document.getElementById("artElegido");
	contenedor.innerHTML = "";

	carrito.forEach((id) => {
		const producto = lentesDisponibles.find(
			(producto) => producto.id === parseInt(id),
		);
		divConImg = document.createElement("div")
			divConImg.innerHTML = `
				<div class="seleccionado">
					<div class="seleccionado-img col-10"><img width="100%" src=${producto.img} alt="producto elegido"></div>
					<div class="seleccionado-description col-10"><p>Descripción del producto seleccionado: ${producto.nombre} , ${producto.marca}</p></div>
					<div class="seleccionado-material col-10"><p>Precio por unidad: $ ${producto.precio}</p></div>
				</div>
			`
			document.getElementById("artElegido").append(divConImg);
	});
};

renderizarProductos();

const cantidadAComprar = document.getElementById(`cantidadAComprar`)
cantidadAComprar.addEventListener("click", (e) => {
	e.preventDefault();
	const valor = parseInt(select.options[select.selectedIndex].value);
	const productosGuardados = JSON.parse(localStorage.getItem("lentesDisponibles"));
	carrito.forEach((id) => {
		const armazon = productosGuardados.find(
			(armazon) => armazon.id === parseInt(id),
		);
		armazon.stock = armazon.stock - valor;
		console.log[armazon.stock];
	});
	localStorage.setItem("lentesDisponibles", JSON.stringify(productosGuardados));
	console.log(productosGuardados);
});

const clearCarrito = document.getElementById(`boton-close`);
    clearCarrito.addEventListener(`click`, clearHTML);
function clearHTML(){
    const eliminarlentes = localStorage.removeItem(`lentes`);
    divConImg.innerHTML = ``; 
	carrito = []; 
}

//funcion para extraer los item del array almacenados
// function extraerProdSeleccinado() {
//     if (almacenados != null){
//         for (let item of almacenados) {
//             let { cardImg, cardPrecio, cardTitle } = item;
//             console.log(item);
//             console.log(cardImg, cardPrecio, cardTitle);
//             carrito.push({cardTitle, cardPrecio, cardImg});
//             mostrarImgDeProdSeleccionado();
//             extraerDataStock();
//         }
//     }
// }
// //armado seccion donde muestra producto elegido
// function mostrarImgDeProdSeleccionado(){
//     for (item of almacenados){
//     let divConImg = document.createElement("div")
//     divConImg.innerHTML += `
//         <div class="seleccionado">
//             <div class="seleccionado-img col-10"><img width="100%" src=${item.cardImg} alt="producto elegido"></div>
//             <div class="seleccionado-description col-10"><p>Descripción del producto seleccionado: ${item.cardTitle}</p></div>
//             <div class="seleccionado-material col-10"><p>Precio por unidad: $ ${item.cardPrecio}</p></div>
//         </div>
//     `
//     document.getElementById("artElegido").append(divConImg);
//     }
//    multiplicarPorLaCantDeseada();
// }

// //funcion para vaciar carrito y localStorage
// //variable para borrar carrito, con close boton


// function multiplicarPorLaCantDeseada(){
//     for (let armazon of carrito){
//     let { cardPrecio } = armazon;
//     console.log (cardPrecio);
//     const select = document.getElementById("cantidadAComprar");
//     select.addEventListener("change",()=>{
//         const valor = parseInt(select.options[select.selectedIndex].value);
//         if (valor === 1){
//             alert (`El valor a abonar es de $ ` + cardPrecio);
//         } else if(valor === 2){
//             let priceTotal = cardPrecio * 2;
//             alert (`El valor a abonar es de $ `+ priceTotal);
//         } else if (valor === 3){
//             let priceTotal2 = cardPrecio * parseInt(3);
//             alert (`El valor a abonar es de $ ` + priceTotal2);
//         }
//         enviarAIndexActualizStock(valor);
//         //restarAlStock(valor);
//     });
//     }
    
// }

// //funcion para extraer stock y id del producto seleccionado, que se guarda en carritoStockId
// function extraerDataStock() {
//     if (seleccionadoIdStock != null){
//         for (let item of seleccionadoIdStock) {
//             let { idProd, stockDispo } = item;
//             console.log(item);
//             console.log(idProd, stockDispo);
//             carritoStockId.push({idProd, stockDispo});
//         }
//     }
// };

// // function restarAlStock(value){
// //         if(value != undefined || null ){
// //         for (let stock of carritoStockId){
// //                 let {stockDispo} = stock
// //                     //let restarAlStock = stockDispo - value; 
// //                     enviarAIndexActualizStock(restarAlStock);  
// //         }        
// //     }
// // }

// function enviarAIndexActualizStock (value){
//     if (value != null || undefined){
//         carritoStockId.push({value});
//         localStorage.setItem(`stockActualizado`, JSON.stringify(carritoStockId));
//     }

// }

// //NOTAS PARA MI
// //devolver el stock al index actualizarlo y borrar el localStorage total 
// // validar input
// //crear un alert con los datos del comprador y lo elegido.