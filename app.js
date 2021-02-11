
// Escucha de eventos
document.getElementById("cantidadChocoRana").addEventListener("change", calculoChocoRana);
document.getElementById("pedirChocoRana").addEventListener("click", escribirPedido);

document.getElementById("cantidadCocoRana").addEventListener("change", calculoCocoRana);
document.getElementById("pedirCocoRana").addEventListener("click", escribirPedido);

document.getElementById("cantidadMaicena").addEventListener("change", calculoMaicena);
document.getElementById("pedirMaicena").addEventListener("click", escribirPedido);

document.getElementById("confirmar").addEventListener("click", confirmar);



function calculoChocoRana() {
    cantidadDeChocoRana = document.getElementById("cantidadChocoRana").value
    precioChocoRanaTotal = cantidadDeChocoRana * precioChocoRana
    document.getElementById("escribirChocoRana").innerHTML = 
    `Si pedís ${cantidadDeChocoRana} alfajores de chocolate sale $ ${precioChocoRanaTotal}`
}

function calculoCocoRana() {
    cantidadDeCocoRana = document.getElementById("cantidadCocoRana").value
    precioCocoRanaTotal = cantidadDeCocoRana * precioCocoRana
    document.getElementById("escribirCocoRana").innerHTML = 
    `Si pedís ${cantidadDeCocoRana} alfajores de coco y chocolate sale $  ${precioCocoRanaTotal}`
}

function calculoMaicena() {
    cantidadDeMaicena = document.getElementById("cantidadMaicena").value
    precioMaicenaTotal = cantidadDeMaicena * precioMaicena
    document.getElementById("escribirMaicena").innerHTML =
    `Si pedís ${cantidadDeMaicena} de maicena sale $ ${precioMaicenaTotal}` 
}



function escribirPedido() {
    var texto_chocoranas = ""
    var texto_cocoranas = ""
    var texto_maicena = ""

    if (cantidadDeChocoRana == 0 || cantidadDeChocoRana == null  ) { 
        texto_chocoranas = ""
    }else{
       texto_chocoranas = `${cantidadDeChocoRana} alfajores de chocolate son $ ${precioChocoRanaTotal} <br/>`
    }

    if (cantidadDeCocoRana == 0 || cantidadDeCocoRana == null  ) { 
        texto_cocoranas = ""
    }else{
       texto_cocoranas = `${cantidadDeCocoRana} alfajores de coco y chocolate son $ ${precioCocoRanaTotal} <br/>`
    }

    
    if (cantidadDeMaicena == 0 || cantidadDeMaicena == null  ) { 
        texto_maicena = ""
    }else{
       texto_maicena = `${cantidadDeMaicena} de maicena son $ ${precioMaicenaTotal} <br/>`
    }

    var totalPedido = precioChocoRanaTotal + precioCocoRanaTotal + precioMaicenaTotal
    var texto_pedido = `El total de tu pedido es ${totalPedido}`

    document.getElementById("pedidoConsolidado").innerHTML = 
    texto_chocoranas + texto_cocoranas + texto_maicena + texto_pedido   
}

function confirmar() {
    document.getElementById("escribirChocoRana").innerHTML = ""
    document.getElementById("escribirCocoRana").innerHTML = ""
    document.getElementById("escribirMaicena").innerHTML = ""

    document.getElementById("cantidadChocoRana").value = 0
    document.getElementById("cantidadCocoRana").value = 0
    document.getElementById("cantidadMaicena").value = 0

    document.getElementById("pedidoConsolidado").innerHTML = ""
    alert(`Peddo confirmado`)
}