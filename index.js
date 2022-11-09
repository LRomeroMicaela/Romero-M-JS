//construyo una clase creadora de objetos
class Lentes{
    constructor(id, img, nombre, marca, modelo, color, precio, stock){
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
const armazon1 = new Lentes(100,"./img/aviadorBless.jpg","Armazón", "Bless", "Aviador", "Negro", 7500, 10);
const armazon2 = new Lentes(101, "./img/davorHSol.jpg", "Lentes de Sol", "Davor", "Envolvente", "Negro", 7500, 100);
const armazon3 = new Lentes(102, "./img/hexagonalBless.jpg", "Armazón", "Bless", "Hexagonal", "Dos colores", 6500, 10);
const armazon4 = new Lentes(103, "./img/pinUp.jpg", "Armazón", "Bless", "Pin Up", "Dorado y Negro", 9000, 10);
const armazon5 = new Lentes(104, "./img/solMildura.jpg", "Lentes de Sol","Mildura", "Pin Up", "Dorado y Rosa", 10500, 10);
const armazon6 = new Lentes(105, "./img/solMuzik.jpg", "Lentes de Sol", "Muzik", "Wayfarer", "Negro", 8500, 10);

let lentesDisponibles = [armazon1, armazon2, armazon3, armazon4, armazon5, armazon6];

//array que corresponde al articulo seleccionado por el cliente.
const arrayProductos = [];

//funcion para armar las card por JS
function armadoCard(){
    for (let armazon of lentesDisponibles){
        let card = document.createElement("div")
        card.innerHTML += `
            <div class="card-body">
            <img src = ${armazon.img} class="card-img-top" alt = ${armazon.nombre}>
              <h5 class="card-title txt-login">${armazon.nombre}, ${armazon.marca}</h5>
              <div class="txt-login cont-price ">
              <h6 class="txt">$</h6>
              <h6 class="card-txt price">${armazon.precio}</h6>
              </div>
              <a id="btn-add" href="#" onClick="restarAlStock(${armazon.id}, ${armazon.stock})" class="btn btn-primary subm1">Agregar al carrito</a>
        </div>`; 
        document.getElementById("container-productos").append(card); 
        card.className ="card col-10 col-md-3 img-cat main-img";   
    }
}
armadoCard();

//variable que selecciona todos los botones de las card
const addButtons = document.querySelectorAll(`#btn-add`);

//funcion, creo el evento del click del boton y llamo a la funcion traer la card seleccionada por el usuario
addButtons.forEach(button =>{
    button.addEventListener(`click`,addToCartClicked);
});

// funcion que trae la card y extraigo los items de la card que me sirven. Llamo a otra funcion para armar el carrito
//guarda en el localStorage el prod seleccionado para pasarlo luego a la hoja carrito
function addToCartClicked(event){
    const boton = event.target;
    const traerCardEntera = boton.closest(`.card`);

    const cardTitle = traerCardEntera.querySelector(`.card-title`).textContent;
    const cardPrecio = traerCardEntera.querySelector(`.card-txt`).textContent;
    const cardImg = traerCardEntera.querySelector(`.card-img-top`).src;

    arrayProductos.push({cardTitle, cardPrecio, cardImg})
    console.log(arrayProductos)

    localStorage.setItem('lentes', JSON.stringify(arrayProductos))
};


//me llevo del array a la hoja carrito el id y stock para restar en la compra
datosDeStock=[];
function restarAlStock(idProd, stockDispo){
  datosDeStock.push({idProd,stockDispo});
  console.log(datosDeStock);
  localStorage.setItem(`stockId`, JSON.stringify(datosDeStock)); 
  extraerStock(); 
};

//saco id y stock actualizado del localStorage, esto vino del carrito.js
let actualizacionDelStock = JSON.parse(localStorage.getItem("stockActualizado"));
const stockAct = [];
let idProd = "";
let stockDispo = "";
function extraerStock(){
    if (stockAct != null){
        for (let item of actualizacionDelStock) {
            let { idProd, restarAlStock } = item;
            console.log(item);
            stockAct.push({idProd, restarAlStock});
            console.log (stockAct);
            actualizarStockDelArray();
        }
    }
}

//funcion para actualizar el stock del armazón elegido
function actualizarStockDelArray(){
    for (let id of stockAct){
        if (id == idProd){
            this.stock = stockDispo;
        }
    }
}