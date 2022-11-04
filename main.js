// fijo el precio de los envios 
let precioEnvioCaba = "600";
let precioEnvioBsAs = "1000";
//fijo en 0 las variables globales a usar dentro del ciclo.
let cantidadLentes= 0;
let eleccionAnteojo = 0;
let acumulador = 0;
let carrito = [];
let armazonElegido =[];
let nuevoStockLentesDisponibles =[];

//construyo una clase creadora de objetos
class Lentes{
    constructor(id, nombre, marca, modelo, color, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
}

//creacion de objetos de la clase Lentes
const armazon1 = new Lentes(100, "Armazón de receta", "Bless", "Aviador", "Negro", 7500, 100);
const armazon2 = new Lentes(101, "Lentes de Sol", "Davor", "Envolvente", "Negro", 7500, 100);
const armazon3 = new Lentes(102, "Armazón de receta", "Bless", "Hexagonal", "Dos colores", 6500, 100);
const armazon4 = new Lentes(103, "Armazón de receta", "Bless", "Pin Up", "Dorado y Negro", 9000, 100);
const armazon5 = new Lentes(104, "Lentes de Sol","Mildura", "Pin Up", "Dorado y Rosa", 10500, 100);
const armazon6 = new Lentes(105, "Lentes de Sol", "Muzik", "Wayfarer", "Negro", 8500, 100);

let lentesDisponibles = [armazon1, armazon2, armazon3, armazon4, armazon5, armazon6];

cicloDeEleccionArmazon();

//el usuario ingresa artículo a comprar.
function cicloDeEleccionArmazon(){
    while (eleccionAnteojo != undefined){
        eleccionAnteojo = prompt(
            `Ingrese el  número del artículo del armazón deseado. 
            - Artículo 100: Armazón de receta, marca Bless, modelo Aviador.
            - Artículo 101: Lentes de Sol, marca Davor, modelo Envolvente.
            - Artículo 102: Armazón de receta, marca Bless, modelo Hexagonal.
            - Artículo 103: Armazón de receta, marca Bless, modelo Pin Up.
            - Artículo 104: Lentes de Sol, marca Mildura, modelo Pin Up.
            - Artículo 105: Lentes de Sol, marca Muzik, modelo Wayfarer.
            Ingrese fin para finalizar la compra.`
        );
        armazonElegido = lentesDisponibles.find(
            (armazon) => armazon.id == eleccionAnteojo,
        );
        console.log(armazonElegido);

        //corroboro que el artículo ingresado sea válido.
        const corroboracionArticuloSeleccionado = lentesDisponibles.some(
            (lente) => lente.id == eleccionAnteojo);
        if(corroboracionArticuloSeleccionado == true){
            alert("El artículo es correcto.")
        }else{
            alert ("Ingresó un artículo incorrecto.")
            break; 
        } 
        calcularTotal();
    }
}
//le pido al usuario que ingrese la cantidad de lentes que desea comprar.
function calcularTotal(){
    cantidadLentes = parseInt(prompt ("Ingrese la cantidad de lentes que desea comprar."));
    console.log(cantidadLentes);
    console.log(armazonElegido.stock);
    
    //cargo cantidad de armazones vendidos a un array
    
    //Agrego al carrito el armazon que eligio el usuario. Primero corroboro que se encuentre disponible la cantidad que desea. 
    let agregarACarrito = addShop(armazonElegido);
    
    //calculo el total a abonar.
    let parcialAPagar = carrito.reduce((suma,lente)=>suma+lente.precio,0);
    let totalAPagar = parcialAPagar * cantidadLentes;
    alert("La cantidad total a abonar es $ " + totalAPagar);

   calculoEnvio();
}
function addShop(glasses){
    if (cantidadLentes <= glasses.stock){
        carrito.push(glasses);
        glasses.stock -= cantidadLentes;
    }else{
        alert("El artículo no posee esa cantidad disponible, vuelva a intentarlo.");
        cicloDeEleccionArmazon();
    }
    
    console.table(carrito);
    console.table(lentesDisponibles);
}
//envio
function calculoEnvio(){
    let envio = (prompt ("Escriba CABA o Buenos Aires, segun a donde desee que se realice el envío"));

    //ciclo for para que introduzca el envio
    for (let i=1; i<=3; i++){
        if(envio == "caba"){
            alert("El envío cuesta " + precioEnvioCaba)
            break;
        } else if (envio == "buenos aires"){
            alert("El envío cuesta "+ precioEnvioBsAs)
            break;
        } else {
            envio = prompt("La opción escrita no es válida, ingrese una válida");
        }
    }
    datosPago();
}
function datosPago(){
    //datos usuario
        let nombreYApellido= prompt("Ingrese su nombre y apellido.");
        let calleCityYCp= prompt("Ingrese su domicilio completo, ciudad y Código Postal para el envío");


    //pago
    let pago = " ";
    for(let i=1; i<=3; i ++){
        pago = prompt("Ingrese el método de pago, escriba efectivo o tarjeta.");
        if (pago == "efectivo"){
            alert("Pague al recibir el producto.");
            break;
        } else if (pago == "tarjeta"){
            let tarjeta= parseInt(prompt("Ingrese su número de tarjeta."));
            let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas, 3 o 6 cuotas."));
                let pagoCantidadCuotas= aPagar(cuotas);
                alert("Cantidad a pagar "+ pagoCantidadCuotas + " en " + cuotas + " cuotas.");
            break;
        } else{
            alert ("Lo ingresado no es correcto");
        }
    }
    //calculo el monto a pagar según cantidad de cuotas
    function aPagar(cantidadCuota){
        let pagarPorCuota = armazonElegido.precio / cantidadCuota;
        return pagarPorCuota;
    }
    
    alert("Los datos ingresados son "+ nombreYApellido + " domicilio " + calleCityYCp +" a pagar con " + pago);
    cicloDeEleccionArmazon();
}



