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

    this.inicializarCart = function(){
       
            if (sessionStorage.getItem("Carrito") != null) {
              this.compras = JSON.parse(sessionStorage.getItem("Carrito"));
              console.log(this.compras);
              actualizarTablaCompra();
            }
        }
    

    //
    //se crea  metodo para ir sumar el total de cantidad

    this.totalQuantity = function () {
        let sumaCantidad = 0;
        for (let i = 0; i < this.compras.length; i++) {
            let compra = this.compras[i];
            sumaCantidad += compra.cantidad;
        }

        return sumaCantidad;

        //se crea metodo para borrar el carrito
    }
    this.eraseCartShop = function () {
        while (this.compras.length > 0) {
            this.compras.pop();
        }
        sessionStorage.clear();
    }

    this.comprar = function (id, cantidad = 1) {
        let found = false;
        for (let compra of this.compras) {
            if (compra.producto.id == id) {
                compra.cantidad += cantidad;
                found = true;
                break;
            }
        }
        if (!found) {
            const product = buscarProducto(id);

            //   const product = allProducts.find(function (p) {
            //    if(p.id==id){
            //        return true;
            //    }
            //    else {
            //        return false;
            //    }



            // return (p.id == id);
            //  });
            // console.log(product);
            cart.addItem(new Compra(product, 1));
            cart.totalShop();
            cart.totalQuantity();
            sessionStorage.setItem("Carrito", JSON.stringify(this.compras));



        }

        actualizarTablaCompra();
        

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
// Ya no es necesaria, porque se genero un JSON con los objetos

// function MyProduct(id, tipo, marca, precio, img) {
//     this.id = id;
//     this.tipo = tipo;
//     this.marca = marca;
//     this.precio = precio;
//     this.img = img;


// }