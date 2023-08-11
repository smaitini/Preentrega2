let productos;
const contenedorProductos = document.querySelector("#contenedor-productos");
const botones = document.querySelectorAll(".botonito");
let botonesAgregas = document.querySelectorAll(".producto-agregar");


    fetch("../json/productos.json")
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        productos = respuesta;
        productosCargados(productos);
    }
    )
    .catch((e) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los productos no han podido ser cargados',
          })
    })


botones.forEach(boton => {
    boton.addEventListener("click",(e) => {
        if (e.currentTarget.id=="Todos") {
            productosCargados(productos);
        } else {
            const botondeProductos = productos.filter(producto => producto.tipoProducto === e.currentTarget.id);
            productosCargados(botondeProductos);
        }
}
    ) //cierra el parentesis del addEventListener
    
}) //cierra el parentesis del forEach

/*Funciones*/

/*Funcion para traer los productos cargados
--------------------------------------------*/
function productosCargados(x){
    contenedorProductos.innerHTML = "";
    x.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
            <img class="producto-imagen" src=${producto.foto} alt="producto.producto">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.producto}</h3>
                <p class="producto-precio">$ ${producto.precio}</p>
                <button class="producto-agregar" id=${producto.idProducto}>Agregar</button>
            </div>`
        contenedorProductos.append(div);
        console.log(div)
    })

        actualizarBotonesAgregar();
}
/*--------------------------------------------*/
function actualizarBotonesAgregar() {
    botonesAgregas = document.querySelectorAll(".producto-agregar");
    botonesAgregas.forEach(boton => {
        boton.addEventListener("click",agregaCarrito);
    })
}

let productosEnCarrito;
const carritoExiste = JSON.parse(localStorage.getItem("Productos"));
console.log(carritoExiste);
if(carritoExiste){
    productosEnCarrito=carritoExiste;
} else {
    productosEnCarrito=[];
}
function agregaCarrito(e) {
    const id = e.currentTarget.id;
    const agregarProducto = productos.find(producto => producto.idProducto === id);
    if (productosEnCarrito.some(producto => producto.idProducto === id)){
        const i = productosEnCarrito.findIndex(producto => producto.idProducto === id);
        productosEnCarrito[i].cantidad++;
    } else {    
        agregarProducto.cantidad=1;
        productosEnCarrito.push(agregarProducto);// no me sirve el "productos.find(producto => producto.idProducto === id)" porque sino lo le puedo agregar la cantidad al producto que voy a agregar. O lo hago desde aca, o le tengo que poner cantidad en el JSON. Pero esa cantidad seria el stock y aca la idea no es bajar el stock sino agregar al carrito
    }
    Toastify({
        text: "Producto agreado",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast();
    //Guardo en LS
    localStorage.setItem("Productos",JSON.stringify(productosEnCarrito));
}

