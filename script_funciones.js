
//Creacion de productos de manera dinamica que recibiran como argumentos un array y un elementohtml

function showProduct(listaDeProductos, itemType) {
    itemType.innerHTML = ' ';
    listaDeProductos.forEach(producto => {
        const card = buildProductoCard(producto);
        itemType.innerHTML += card;
    });
}



function buildProductoCard(producto) {
    let div = ` <div class="card" style="width: 15rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.marca}</h5>
      <h5 class="card-title">${producto.tipo}</h5>
      <h5 class="card-title">${producto.precio}</h5>
      
      <button class="btn btn-dark comprar" onclick='comprar(${producto.id})' >COMPRAR</button>
    </div>
  </div>
    `
    return div;
}

//funcion que capta con un evento el producto y lo guarda en la consola
function comprar(id) {
    const product = allProducts.find(function (p) {
        return (p.id == id);

    });
    // console.log(product);
    cart.addItem(new Compra(product, 1));
    actualizarTablaCompra();
    
}

function actualizarTablaCompra() {
    let html = '';
    for (let compra of cart.compras) {
        // console.log(compra.producto.precio)
        // console.log(compra.producto.marca)
        html += `<tr>
        <th scope="row">${compra.producto.id}</th>
        <td>${compra.producto.marca}</td>
        <td>${compra.producto.precio}</td>
        <td>${compra.cantidad}</td>
      </tr>`
    }
    carritoList.innerHTML = html;

}









//INICIALAZAMOS VARIABLES del DOM

let productBoard = document.getElementById('product-board');
let productTruck = document.getElementById('product-truck');
let productWheels = document.getElementById('product-wheels');
let carritoList = document.getElementById('productos-cart');
let titulo = document.getElementById('titulo-tablas');
let tituloTruck = document.getElementById('titulo-truck');


//Eventos
titulo.onclick = function (event) {
    console.log(event);
};
tituloTruck.onmouseout = function (event) {
    console.log(event);
}

//Llamo a las funciones para cargar el DOM con los productos
showProduct(boardArr, productBoard);
showProduct(truckArr, productTruck);
showProduct(wheelsArr, productWheels);

console.log(cart.compras);