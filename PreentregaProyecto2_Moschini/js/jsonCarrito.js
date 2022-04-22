carrito = validarStorageCarrito();
totalPesos = validarStoragePesos();


function validarStorageCarrito(){
    if(localStorage.getItem("comprasHechas") != null){
        const storageProductos = JSON.parse(localStorage.getItem("comprasHechas"));
        return storageProductos;
    }else{
        return [];
    };
};

document.getElementById("cantidadAcumulada").innerHTML = carrito.length;

function validarStoragePesos(){
    if(localStorage.getItem("totalCompras") != null){
        const storagePesos = JSON.parse(localStorage.getItem("totalCompras"));
        return storagePesos;
    }else{
        return[];
    };
};

document.getElementById("totalPesosAcumulados").innerHTML = totalPesos;

generarCardShop(carrito);

function generarCardShop(productosAMostrarShop){
    let acumuladorDeCardShop = ``;
    productosAMostrarShop.forEach((elementoDelArrayShop) => {
        acumuladorDeCardShop += `
        <tr>
        <td class="product__cart__item">
            <div class="product__cart__item__text">
                <h6>${elementoDelArrayShop.producto}</h6>
                <h5>$ ${elementoDelArrayShop.precio} por unidad</h5>
            </div>
            <td class="quantity__item">
            <div class="quantity">
                <div class="pro-qty-2">
                    ${elementoDelArrayShop.cantidad}
                </div>
            </div>
        </td>
        </td>
        <td class="cart__price">$ ${elementoDelArrayShop.costo}</td>
    </tr>
        `;});
    mostrarCardsEnElHTMLShop(acumuladorDeCardShop);
};

function mostrarCardsEnElHTMLShop(cardShop){
    document.getElementById("lista-carrito").innerHTML = cardShop;
};

function vaciarCarrito(){
    localStorage.setItem("comprasHechas", "");
    localStorage.setItem("totalCompras", "");
    location.reload();
};

document.getElementById("sumaTotal").innerHTML = totalPesos;