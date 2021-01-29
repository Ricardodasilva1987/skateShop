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
var myFirstShop = new MyShopCar();


//SE CREA FUNCION CONSTRUCTORA CON OBJETOS

function MyProduct (tipo, marca, precio, cantidad){
    this.tipo=tipo;
    this.marca=marca;
    this.precio=precio;
    this.cantidad=cantidad;
}

//se creo un objeto producto
var myFirstItem = new MyProduct("Board","Zero",10000, 2);
var mySecondtItem = new MyProduct("Board","Shortys",15000, 1);
var myThirdtItem = new MyProduct("Trucks","Independent",15000, 1);


myFirstShop.addItem(myFirstItem);


myFirstShop.addItem(mySecondtItem);
myFirstShop.addItem(myThirdtItem);






console.log(myFirstShop.compra);

for( let i=0; i< myFirstShop.compra.length ; i++){
    console.log(myFirstShop.compra[i]);

}