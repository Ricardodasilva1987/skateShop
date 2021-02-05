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


//se crearon objetos un objeto por producto
var baker = new MyProduct("Board","Baker",10000,"/Images/baker.jpg");
var santaCruz = new MyProduct("Board","Santa Cruz",18000,"/Images/santacruzsakeboards.jpg");
var shortys = new MyProduct("Board","Shortys",15000,"/Images/shortys.jpg");
var blind = new MyProduct("Board","Blind",5000,"/Images/blindskate.jpg");
var independent = new MyProduct("Trucks","Independent",15000,"/Images/independenttruck.jpg");
var destructo = new MyProduct("Trucks","destructo",25000,"/Images/destructotrucks.jpg");
var tensor = new MyProduct("Trucks","Tensor",25000,"/Images/tensortruck.jpg");
var phantom= new MyProduct("Trucks","Phamton",25000,"/Images/phamtontrucks.jpg");
var pigw= new MyProduct("Wheels","Pig",3000,"/Images/pigwheels.jpg");
var spitfire= new MyProduct("Wheels","Spitfire",5000,"/Images/sfwheels.jpg");
var powell= new MyProduct("Wheels","Powell Peralta",5000,"/Images/ppwheels_.jpg");


let boardArr =[baker,shortys,blind,santaCruz];
let truckArr =[independent,destructo,phantom,tensor];
let wheelsArr=[pigw,spitfire,powell];

function Compra (producto,cantidad,descuento){
    this.producto=producto;
    this.cantidad=cantidad;
    this.descuento=descuento

    this.getPrecioConDescuento= function(){
        return this.producto.precio*this.descuento
    }
}





cart.addItem(new Compra (shortys,3));



console.log(boardArr);





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


// let cambiando = document.getElementById('titulo-tablas');
// cambiando.innerHTML='helo';




