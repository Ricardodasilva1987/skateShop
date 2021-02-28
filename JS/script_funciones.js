



let allProducts = []; //.concat(boardArr, truckArr, wheelsArr);



//INICIALAZAMOS VARIABLES del DOM JQUERY

 
 let carritoList = document.getElementById('productos-cart');
//  let titulo = document.getElementById('titulo-tablas');
 let totalShopFooter = document.getElementById('total-shop');
 let borrarCompra = document.getElementById('erase');
 let adquirirCompra = document.getElementById('shop')
 let modal = document.getElementById('modal');
 let titulomodal = document.getElementById('titulomodal');
 let usuario = document.getElementById('usuario');





//BOTON DE BORRADO y COMPRAR
let erase = $("#erase").click(eraseTabla);
let mostrarcompra = $("#mostrarcompra").click(mostrarCompra);
let ingresoUSer = $("#usuario").click(ingresoDeUsuario);
//

//DESARROLLO DE LA METODOLOGIA

//Creacion de productos de manera dinamica que recibiran como argumentos un array y un elementohtml

function showProduct(listaDeProductos, selector) {
    
    let html = '';
    
    //SE UTILIZA UN LOOP PARA RECORRER EL ARREGLO
    listaDeProductos.forEach(producto => {
        const card = buildProductoCard(producto);
        html += card;
    });

    $(selector).html(html);
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
    // carritoList.innerHTML = html;
    $("#productos-cart").html(html);
     totalShopFooter.innerHTML = html2;
    // $("#total-shop").html(html2);
  

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

function procesarData(data){
    
    
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


    showProduct(data.boards, "#product-board");
    showProduct(data.trucks, "#product-truck");
    showProduct(data.wheels, "#product-wheels");
}


$(document).ready(function(){
    $("#cart-btn").click(function(event){
        $("#carrito").toggle(1000);
    })
    $.ajax({
        url : "https://raw.githubusercontent.com/Ricardodasilva1987/skateShop/master/productos.json",
        dataType:"json",
        success: function(response){
            console.log(response);
            procesarData(response);
        }

    })

})