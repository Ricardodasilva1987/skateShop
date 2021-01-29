// //CONSTRUCTOR OBJETOS// DESAFIO 5 //SE PROPONE UNA SKATE-SHOP//

// //Constructor de modelo de skate//
// function Myskate(board, truck, wheels, hardware) {
//     this.board = board;
//     this.truck = truck;
//     this.wheels = wheels;
//     this.hardware = hardware;

//     //Metodo publico simple//
//     this.getSkateModel = function () {
//         return `Seleccionaste ${board} con trucks ${truck} ruedas ${wheels} y hardware ${hardware}`;
//     }
//     //Metodo para obtener oferta//
//     this.getOffer = function () {
//         if (this.board == 'blind') {
//             console.log('Estas de suerte tenemos una oferta en tablas Blind');
//         }

//         if (this.truck == 'Tensor'||this.truck=='independent'){
//             console.log('Tenemos buenas ofertas para estos trucks')

//         } 
//         else {
//             console.log('gracias por tu compra');
//         }
//     }
// }

// //Creando instancias
// let customskate1 = new Myskate('blind', 'Tensor', 'spitfire', '3-pulg');
// let customskate2 = new Myskate('Santa Cruz', 'independent', 'spitfire', '3-pulg');
// let customskate3 = new Myskate('Anti-hero', 'Destructo', 'DNA', '4-pulg');
// let customskate4 = new Myskate('Baker', 'independent', 'Pig', '3-pulg');




// //Probando las instancias y sus propiedades:

// console.log(customskate1);
// console.log(customskate1.wheels);
// console.log(customskate1.getSkateModel());
// console.log(customskate1.getOffer());




// console.log(customskate2);
// console.log(customskate2.truck);
// console.log(customskate2.getSkateModel());
// console.log(customskate2.getOffer());



// console.log(customskate3);
// console.log(customskate2.board);
// console.log(customskate3.getSkateModel());
// console.log(customskate3.getOffer());



// console.log(customskate4);
// console.log(customskate2.hardware);
// console.log(customskate4.getSkateModel());
// console.log(customskate4.getOffer());


//Funiones constructoras para objetos individuales
//Entrega clase 6
function Board(marca, medida, precio,image) {
    this.marca = marca;
    this.medida = medida;
    this.precio = precio;
    this.image= image;

    this.getBoard = function () {
        return `Haz seleccionado el modelo ${marca} ${medida} y su valor es de ${precio}`
    }

    this.getOfferBoard = function () {
        if (this.marca == 'blind' || this.marca == 'DNA') {
            let newPrice = this.precio * 0.7;
           return `El precio de tu tabla es ${newPrice}`;
        } else {
            return`Gracias por su compra`;
        }
    }

}

//SE CREARON 6 INSTANCIAS Y LAS UNIFIFIQUE EN DOS ARRAYS

let boards1 = [
    new Board('Shortys', 7, 10000, "Images/shortys.jpg"),
    new Board('blind', 7.5, 12000,"Images/shortys.jpg"),
    new Board('Santa cruz', 8.75, 80000,"Images/shortys.jpg")
];

let boards2 = [
    new Board('Anti-Hero', 9, 12000, "Images/shortys.jpg"),
    new Board('ZERO', 8.25, 14000,"Images/shortys.jpg"),
    new Board('Baker', 8, 16500,"Images/shortys.jpg")
];

//SE UTILIZO EL METODO CONCAT
let boards= boards1.concat(boards2);

 console.log(boards);
//REALICE UNA FUNCION PARA LLAMAR  A UN CIcLO FOR OF PARA RECORRER ARREGLOS
//Y ME MUESTRE EN CONSOLA  LAS TABLAS Y UNOS METODOS DE LA FUNCION CONSTRUCTORA

function compraSkate (){

 for (let board of boards) {
    console.log(board);
    console.log(board.getBoard());
    console.log(board.getOfferBoard());
 }

}

compraSkate();