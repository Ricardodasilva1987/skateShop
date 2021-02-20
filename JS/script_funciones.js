// //se crearon objetos un objeto por producto
// var baker = new MyProduct(1, "Board", "Baker", 10000, "Images/baker.jpg");
// var santaCruz = new MyProduct(2, "Board", "Santa Cruz", 18000, "Images/santacruzsakeboards.jpg");
// var shortys = new MyProduct(3, "Board", "Shortys", 15000, "Images/shortys.jpg");
// var blind = new MyProduct(4, "Board", "Blind", 5000, "Images/blindskate.jpg");
// var independent = new MyProduct(5, "Trucks", "Independent", 15000, "Images/independenttruck.jpg");
// var destructo = new MyProduct(6, "Trucks", "destructo", 25000, "Images/destructotrucks.jpg");
// var tensor = new MyProduct(7, "Trucks", "Tensor", 25000, "Images/tensortruck.jpg");
// var phantom = new MyProduct(8, "Trucks", "Phamton", 25000, "Images/phamtontrucks.jpg");
// var pigw = new MyProduct(9, "Wheels", "Pig", 3000, "Images/pigwheels.jpg");
// var spitfire = new MyProduct(10, "Wheels", "Spitfire", 5000, "Images/sfwheels.jpg");
// var powell = new MyProduct(11, "Wheels", "Powell Peralta", 5000, "Images/ppwheels_.jpg");



//SE CREAN ARREGLOS DE LOS PRODUCTOS POR CATEGORIA
// let boardArr = [baker, shortys, blind, santaCruz];
// let truckArr = [independent, destructo, phantom, tensor];
// let wheelsArr = [pigw, spitfire, powell];
//SE UNIERON CON UN CONCAT EN UN SOLO ARRAY EMULANDO UN JSON
let allProducts = [];//.concat(boardArr, truckArr, wheelsArr);



//INICIALAZAMOS VARIABLES del DOM

let productBoard = document.getElementById('product-board');
let productTruck = document.getElementById('product-truck');
let productWheels = document.getElementById('product-wheels');
let carritoList = document.getElementById('productos-cart');
let titulo = document.getElementById('titulo-tablas');
let totalShopFooter = document.getElementById('total-shop');
let borrarCompra = document.getElementById('erase');
let adquirirCompra = document.getElementById('shop')
let modal = document.getElementById('modal');
let titulomodal = document.getElementById('titulomodal');
let usuario = document.getElementById('usuario');



//Eventos JQUERY
//PRUEBA
let tituloTruck = $("#titulo-truck").click(function () {
    $("#titulo-truck").hide();
})
//BOTON DE BORRADO y COMPRAR
let erase = $("#erase").click(eraseTabla);
let mostrarcompra = $("#mostrarcompra").click(mostrarCompra);
let ingresoUSer = $("#usuario").click(ingresoDeUsuario);
//

//DESARROLLO DE LA METODOLOGIA

//Creacion de productos de manera dinamica que recibiran como argumentos un array y un elementohtml

function showProduct(listaDeProductos, itemType) {
    //EL itemType es product-board; product-truck o product-wheels
    itemType.innerHTML = ' ';
    //SE UTILIZA UN LOOP PARA RECORRER EL ARREGLO
    listaDeProductos.forEach(producto => {
        const card = buildProductoCard(producto);
        itemType.innerHTML += card;
    });
}



function buildProductoCard(producto) {
    let div = ` <div class="card" style="width: 15rem;">
    <img src="${producto.img}" class="card-img-top" alt="productos carrito">
    <div class="card-body">
      <h5 class="card-title">${producto.marca}</h5>
      <h5 class="card-title">${producto.tipo}</h5>
      <h5 class="card-title">${producto.precio}</h5>

      <button class="btn btn-dark comprar" onclick='cart.comprar(${producto.id})' >COMPRAR</button>
    </div>
  </div>
    `
    return div;
}

//funcion que capta con un evento el producto y lo guarda en la consola
function buscarProducto(id) {
    for (let product of allProducts) {
        if (product.id == id)
            return product
    }
    return null;
}



function actualizarTablaCompra() {
    let html = '';
    let html2 = '';
    for (let compra of cart.compras) {
        // console.log(compra.producto.precio)
        // console.log(compra.producto.marca)
        html += `<tr>
        <th scope="row">${compra.producto.id}</th>
        <th scope="row">${compra.producto.tipo}</th>
        <td>${compra.producto.marca}</td>
        <td>$ ${compra.producto.precio}</td>
        <td>${compra.cantidad}</td>
      </tr>`

        html2 = `<tr>
        <th scope="row">'------'</th>
        <td>TOTAL</td>
        <td>TOTAL</td>
        <td>$ ${cart.totalShop()}</td>
        <td>${cart.totalQuantity()}</td>
      </tr>`

    }
    //Definiendo donde entraran las filas creadas en actualizarTablaCompra
    carritoList.innerHTML = html;
    totalShopFooter.innerHTML = html2;
    // console.log(`El total de la compra es`, cart.totalShop())
    // console.log(cart.totalQuantity());

}

function eraseTabla() {
    cart.eraseCartShop();

    carritoList.innerHTML = '';
    totalShopFooter.innerHTML = `<tr>
    <th scope="row">'------'</th>
    <td>'-------'</td>
    <td>$ 0</td>
    <td> 0 </td>
  </tr>`
}

function mostrarCompra() {
    if (cart.totalShop() > 0) {
        modal.innerHTML = `<p> Haz ha adquirido ${cart.totalQuantity()} items
        por un monto total de $ ${cart.totalShop()} pesos</p> `
        titulomodal.innerHTML = ` <h3 class="modal-title" id="exampleModalLabel">Lets roll !!!</h3> `

    } else {
        modal.innerHTML = `<p> No has comprado aun</p> `
        titulomodal.innerHTML = ` <h3 class="modal-title" id="exampleModalLabel">Tienes el carrito vacio</h3> `
    }


}

function ingresoDeUsuario() {
    cart.inicializarCart();
}

function getData(callback) {
    setTimeout(function () {
        const json = `{
                    "boards":[
                        {
                        "id":1,
                        "marca":"Baker",
                        "tipo":"Boards",
                        "precio":10000,
                        "img":"Images/baker.jpg"     
                        },
                        {
                        "id":2,
                        "marca":"Santa Cruz",
                        "tipo":"Board",
                        "precio":18000,
                        "img":"Images/santacruzsakeboards.jpg"   
                        },
                        {
                        "id":3,
                        "marca":"Shortys",
                        "tipo":"Board",
                        "precio":15000,
                        "img":"Images/shortys.jpg"  
                        },
                        {
                        "id":4,
                        "marca":"Blind",
                        "tipo":"Board",
                        "precio":9500,
                        "img":"Images/blindskate.jpg"   
                        }
                    ],
                    "trucks":[
                        {
                        "id":5,
                        "marca":"Independent",
                        "tipo":"Trucks",
                        "precio":15000,
                        "img":"Images/independenttruck.jpg"
                        },
                        {
                        "id":6,
                        "marca":"Destructo",
                        "tipo":"Trucks",
                        "precio":14500,
                        "img":"Images/destructotrucks.jpg"
                        },
                        {
                        "id":7,
                        "marca":"Tensor",
                        "tipo":"Trucks",
                        "precio":16500,
                        "img":"Images/tensortruck.jpg"
                        },
                        {
                        "id":8,
                        "marca":"Phantom",
                        "tipo":"Trucks",
                        "precio":15500,
                        "img":"Images/phamtontrucks.jpg"
                        }
                        ],
                    "wheels":[
                            {
                        "id":9,
                        "marca":"Pig",
                        "tipo":"Wheels",
                        "precio":5500,
                        "img":"Images/pigwheels.jpg"
                            },
                            {
                        "id":10,
                        "marca":"Spitfire",
                        "tipo":"Wheels",
                        "precio":6250,
                        "img":"Images/sfwheels.jpg"
                        },
                         {
                        "id":11,
                        "marca":"Powell Peralta",
                        "tipo":"Wheels",
                        "precio":7200,
                        "img":"Images/ppwheels_.jpg"
                        }
                    ]
             }`;
        callback(json);
    }, 2000)
}

function procesarData(json){
    const data = JSON.parse(json);
    console.log('llego la data', data);
    
    for(let board of data.boards){
        allProducts.push(board);
    }

    for(let truck of data.trucks){
        allProducts.push(truck);
    }

    for(let wheel of data.wheels){
        allProducts.push(wheel);
    }
    console.log("allProducts: ", allProducts);


    showProduct(data.boards, productBoard);
    showProduct(data.trucks, productTruck);
    showProduct(data.wheels, productWheels);
}

function init(){
    getData(procesarData);
}

//Inicializo el renderizado a partir de un JSON .
init();

//Llamo a las funciones para cargar el DOM con los productos
// showProduct(boardArr, productBoard);
// showProduct(truckArr, productTruck);
// showProduct(wheelsArr, productWheels);


// console.log(cart.compras);

console.log(json)