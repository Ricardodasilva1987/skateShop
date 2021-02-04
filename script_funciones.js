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
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    return div;
}







//INICIALAZAMOS VARIABLES

let productBoard = document.getElementById('product-board');

showProduct(boardArr);
