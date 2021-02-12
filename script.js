//SE CREA CARRITO COMO UNA FUNCION CONSTRUCTORA

function MyShopCar() {

    //se crea esta propiedad, que sera un array de los productos agregados
    this.compras = []




    //METODOS

    //se crea un metodo para ir integrando los objetos a la propiedad compra.
    this.addItem = function (compra) {
        this.compras.push(compra);
    }
    //Se crea otro metodo para sumar el total
    this.totalShop = function () {
        let sumaTotal = 0;
        for (let i = 0; i < this.compras.length; i++) {
            let compra = this.compras[i];
             sumaTotal += compra.producto.precio * compra.cantidad;
        }

        return sumaTotal;

    }
    //se crea  metodo para ir sumar el total de cantidad
    
    this.totalQuantity = function () {
        let sumaCantidad= 1;
        for(let i = 1; i < this.compras.length; i++) {
            let compra=this.compras[i];
            sumaCantidad +=compra.cantidad;
        }
        
        return sumaCantidad;

        //se crea metodo para borrar el carrito
    }
    this.eraseCartShop = function () {
        while(this.compras.length > 0){
            this.compras.pop();
        }
    }

   
}
//se creo objeto carrito
var cart = new MyShopCar();


//Se crea una funcion constructora de la accion de compra
function Compra(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
    
}

//SE CREA FUNCION CONSTRUCTORA del producto

function MyProduct(id, tipo, marca, precio, img) {
    this.id = id;
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
    this.img = img;


}


