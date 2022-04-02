/*PRODUCTOS*/
const carrito = [];

const productos = [
    { id: 1, producto: "Café en granos x 5 kg", precio: 4600, stock: 100, imagen: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/10/12/1094538.jpg"},
    { id: 2, producto: "Café en cápsulas x 10 unidades", precio: 1600, stock: 75, imagen: "https://i.blogs.es/d7ef91/capsulas1/450_1000.jpg"},
    { id: 3, producto: "Tazas por 3 unidades", precio: 1800, stock: 0, imagen: "https://http2.mlstatic.com/D_NQ_NP_896428-MLA43406068141_092020-O.webp"},
    { id: 4, producto: "Cafetera premium", precio: 18500, stock: 5, imagen: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2021/03/01/16146023778057.jpg"},
    { id: 5, producto: "Café en cápsulas x 50 unidades", precio: 7000, stock: 18, imagen:"https://www.esturirafi.com/wp-content/uploads/2015/06/capsulas-cafe-nespresso.jpg"},
    { id: 6, producto: "Tazas por 6 unidades", precio: 3000, stock: 11, imagen: "https://http2.mlstatic.com/D_NQ_NP_824646-MLA46859143069_072021-O.jpg"}
];



/*MOSTRAR PRODUCTOS EN LA PÁGINA SHOP.HTML*/

generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `
    <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item sale">
            <div class="product__item__pic set-bg">
            <img src="${elementoDelArray.imagen}" alt="">
            </div>
            <div class="product__item__text">
                <h6>${elementoDelArray.producto}</h6>
                <a href="#" class="add-cart" onclick="comprarProducto(${elementoDelArray.id})">+ Agregar al carrito</a>
                <h5>${elementoDelArray.precio}</h5>
                <input value="1" min="1" id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
            </div>
        </div>
    </div>
        `;});
    mostrarCardsEnElHTML(acumuladorDeCards);
};

function mostrarCardsEnElHTML(cards){
    document.getElementById("lista-productos").innerHTML = cards;
};

/*AGREGAR AL CARRITO */

var totalPesos =0;

comprarProducto(productos);

function comprarProducto(idProducto){
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;
    const resultado = productos.find(producto => producto.id === idProducto);
    if (valorDeCantidad != 0){
    if(resultado.stock === 0){
        console.log("No hay stock");
        swal("¡Lo siento!", "Las unidades seleccionadas no alcanzan debido a la falta de stock", "error");
        if(resultado.stock - valorDeCantidad > 0){
            resultado.stock = resultado.stock - valorDeCantidad;
            console.log(`Quedan ${resultado.stock} unidades`);
        }else{
            resultado.stock = 0;
            console.log("No hay stock");
            swal("¡Lo siento!", "Las unidades seleccionadas no alcanzan debido a la falta de stock", "error");
        };
    };

    if(resultado.stock ===0){
    }else{
    carrito.push(resultado);

    totalPesos = totalPesos + resultado.precio*valorDeCantidad;
    localStorage.setItem("comprasHechas", JSON.stringify(carrito));
    localStorage.setItem("totalCompras", JSON.stringify(totalPesos));
    document.getElementById("totalPesosAcumulados").innerHTML = totalPesos;
    document.getElementById("cantidadAcumulada").innerHTML = carrito.length;

    Toastify({
        text: `Se agregó un producto al carrito`,
        offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
          }).showToast();
};

}else{
    console.log("El usuario no ingresó el valor correctamente");
};
};

function searchProducts() {
    const nombreProducto = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const findProducts = productos.filter((producto) => {
        return producto.producto.toUpperCase().match(nombreProducto);
    });

    generarCards(findProducts);
};


