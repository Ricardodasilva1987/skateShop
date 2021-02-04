//SE CREA CARRITO COMO UNA FUNCION CONSTRUCTORA

function MyShopCar() {

    //se crea esta propiedad, que sera un array de los productos agregados
    this.compra = []

    //se crea un metodo para ir integrando los objetos a la propiedad compra.
    this.addItem = function (compra) {
        this.compra.push(compra);
    }
}
//se creo objeto carrito
var cart = new MyShopCar();


//SE CREA FUNCION CONSTRUCTORA CON OBJETOS

function MyProduct (tipo, marca, precio, img){
    this.tipo=tipo;
    this.marca=marca;
    this.precio=precio;
    this.img=img;

}


//se crearon objetos un objeto producto
var baker = new MyProduct("Board","Baker",10000,"/Images/baker.jpg");
var shortys = new MyProduct("Board","Shortys",15000,"/Images/shortys.jpg");
var independent = new MyProduct("Trucks","Independent",15000,"/Images/independenttruck.jpg");
var blind = new MyProduct("Board","Blind",5000,"/Images/blindskate.jpg");
var destructo = new MyProduct("Trucks","destructo",25000,"/Images/destructotrucks.jpg");

let boardArr =[baker,shortys,independent,blind,destructo];

function Compra (producto,cantidad,descuento){
    this.producto=producto;
    this.cantidad=cantidad;
    this.descuento=descuento

    this.getPrecioConDescuento= function(){
        return this.producto.precio*this.descuento
    }
}





cart.addItem(new Compra (shortys,3));



console.log(cart);





console.log(cart.compra);

for( let i=0; i< cart.compra.length ; i++){
    console.log(cart.compra[i]);

}

// INSERTARDO ELEMENTO AL HTML en tablas

// let tablas= document.getElementById('tablas');

// for( let board of boardArr){

//     let li =document.createElement('li');
//     let img = document.createElement('img');
//     img.src = board.img;
//     li.appendChild(img);
//     tablas.appendChild(li);


// }



//CAMBIANDO LOS PRECIOS DE LAS IMAGANES EN EL DOM
let productosBoards = document.getElementById("boards");

function mostrarProducto (boardArr){
    productosBoards.innerHTML='';
    boardArr.forEach(function(element){
        
        const cart=contructorDeCartas(element);
        productosBoards.innerHTML += cart;
    };
}

function contructorDeCartas(element){
    let div =`<div class="card"  style="width: 18rem; height: 25rem;">
    <img src="${element.img}" class="card-img-top" alt="..." style="height: 18rem;">
    <div class="card-body" >
      <p class="card-text" id ="baker">${element.marca}</p>
    </div> `
    return div;
}