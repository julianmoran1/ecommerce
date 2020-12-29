var contenedorarticulos = document.getElementById("contenedorarticulos")



function cargoProductos(listaproductos){
if (productos.length > 0){
    articulos = ""
    for (let i in productos){
        articulos += `
        <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">

                            <!--Card image-->
                            <div class="view overlay zoom">
                                <img src="${productos[i].imagen}" class="card-img-top" alt="">
                                    <div class="mask rgba-white-slight"></div>
                            </div>

                            <!--Card content-->
                            <div class="card-body">
                                <!--Title-->
                                <h4 class="card-title">${productos[i].nombre}</h4>
                                
                                <!--Text-->
                                <p class="card-text">${productos[i].descripcion}</p>
                                <h5>$ ${productos[i].precio} C/U</h5>
                                
                                <label for="${productos[i].idinputcantidad}">Cantidad
                                    <input type="number" value="0" min="0" id="${productos[i].idinputcantidad}">
                                </label>
                                <p id="${productos[i].idescribir}"></p>
                                <button class="btn btn-success btn-md" id="${productos[i].idboton}">
                                    Agregar a carrito
                                </button>

                                
                            </div>
                        </div>
                        </div>
                        
        `
       
        }
    }
    listaproductos.innerHTML = articulos
}

document.body.onload = cargoProductos(contenedorarticulos)


/* $.get("productos.json", function (data, status){
    const contenedor = document.getElementById("contenedor")
        data.forEach(productos => {
            let tarjeta = document.createElement("div")
            tarjeta.innerHTML = 
            `
            <div class="card">
    
                                <!--Card image-->
                                <div class="view overlay zoom">
                                    <img src="${productos.imagen}" class="card-img-top" alt="">
                                    <a href="#">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
    
                                <!--Card content-->
                                <div class="card-body">
                                    <!--Title-->
                                    <h4 class="card-title">${productos.nombre}</h4>
                                    
                                    <!--Text-->
                                    <p class="card-text">${productos.descripcion}</p>
                                    <h5>$ ${productos.precio} C/U</h5>
                                    
                                    <label for="${productos.idinputcantidad}">Cantidad
                                        <input type="number" value="0" min="0" id="${productos.idinputcantidad}">
                                    </label>
                                    <p id="${productos.idescribir}"></p>
                                    <button class="btn btn-success btn-md" id="${productos.idboton}">
                                        Agregar a carrito
                                    </button>
    
                                    
                                </div>
                            </div>
    
            `
    
            contenedor.appendChild(tarjeta)
        })
    })
 */