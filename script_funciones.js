function showProduct(listaDeProductos){
    productBoard.innerHTML='';
    listaDeProductos.array.forEach(producto => {
        const card= buildProductoCard(producto);
        productBoard.innerHTML+=card;
    });
}

function buildProductoCard(producto){
    let div = ` <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${marca}</h5>
      <h5 class="card-title">${tipo}</h5>
      <h5 class="card-title">${precio}</h5>
      
      <a href="#" class="btn btn-primary">COMPRAR</a>
    </div>
  </div>
    `
    return div;
}







//INICIALAZAMOS VARIABLES

let productBoard = document.getElementById('product-board');

showProduct(boardArr);
