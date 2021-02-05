
function showProductBoard(listaDeProductos){
    productBoard.innerHTML=' ';
    listaDeProductos.forEach(producto => {
        const card= buildProductoCard(producto);
        productBoard.innerHTML+=card;
    });
}

function buildProductoCard(producto){
    let div = ` <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.marca}</h5>
      <h5 class="card-title">${producto.tipo}</h5>
      <h5 class="card-title">${producto.precio}</h5>
      
      <a href="#" class="btn btn-primary">COMPRAR</a>
    </div>
  </div>
    `
    return div;
}
function showProductTruck(listaDeProductos){
    producttruck.innerHTML=' ';
    listaDeProductos.forEach(producto => {
        const card2= buildProductoCard2(producto);
        productTruck.innerHTML+=card2;
    });
}

function buildProductoCard2(producto){
    let div2 = ` <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.marca}</h5>
      <h5 class="card-title">${producto.tipo}</h5>
      <h5 class="card-title">${producto.precio}</h5>
      
      <a href="#" class="btn btn-primary">COMPRAR</a>
    </div>
  </div>
    `
    return div2;
}





//INICIALAZAMOS VARIABLES

let productBoard = document.getElementById('product-board');
let productTruck = document.getElementById('product-truck');




showProductBoard(boardArr);
showProductTruck(truckArr);



