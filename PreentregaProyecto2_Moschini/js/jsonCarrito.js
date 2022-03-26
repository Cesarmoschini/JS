const carro = validarStorageCarrito();
const totalPesos = validarStoragePesos();

function validarStorageCarrito(){
    if(localStorage.getItem("comprasHechas") != null){
        const storageProductos = JSON.parse(localStorage.getItem("comprasHechas"));
        return storageProductos;
    }else{
        return [];
    }
}


function validarStoragePesos(){
    if(localStorage.getItem("totalCompras") != null){
        const storagePesos = JSON.parse(localStorage.getItem("totalCompras"));
        return storagePesos;
    }else{
        return[];
    }
}

document.getElementById("cantidadAcumulada").innerHTML = carro.length;
document.getElementById("totalPesosAcumulados").innerHTML = totalPesos;