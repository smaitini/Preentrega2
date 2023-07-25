const productos = [
    {
        "tipoProducto":"Futbol",
        "idtipoPruducto": "1",
        "idProducto":"1",
        "producto": "Pelota nro 5 Profesional",
        "precio":"1000",
        "foto": "./img/pelota.jpg"
    },
    {
        "tipoProducto":"Futbol",
        "idtipoPruducto": "1",
        "idProducto":"2",
        "producto":"Pelota",
        "precio":"1000",
        "foto": "./img/Pelota.jpg"
    },
    {
        "tipoProducto":"Futbol",
        "idtipoPruducto": "1",
        "idProducto":"3",
        "producto": "Pelota Etrusco",
        "precio":"1000",
        "foto": "./img/etrusco.jpg"
    },
    {
        "tipoProducto":"Futbol",
        "idtipoPruducto": "1",
        "idProducto":"4",
        "producto": "Pelota Tango",
        "precio":"1000",
        "foto": "./img/Tango.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"5",
        "producto": "Dobok TAEKWONDO",
                "precio":"1000",
        "foto": "./img/dobokTKD.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"6",
        "producto": "Cinturon Amarillo",
                "precio":"1000",
        "foto": "./img/cinturonAmarillo.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"7",
        "producto": "Cinturon Verde",
        "precio":"1000",
        "foto": "./img/cinturonVerde.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"8",
        "producto": "Cinturon Azul",
        "precio":"1000",
        "foto": "./img/cinturonAzul.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"8",
        "producto": "Cinturon Rojo",
        "precio":"1000",
        "foto": "./img/cinturonRojo.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"10",
        "producto": "Cinturon Negro",
        "precio":"1000",
        "foto": "./img/cinturonNegro.jpg"
    },
    {
        "tipoProducto":"Artes Marciales",
        "idtipoPruducto": "2",
        "idProducto":"11",
        "producto": "Puntas cinturon",
        "precio":"1000",
        "foto": "./img/puntas.jpg"
    },
    {
        "tipoProducto":"Running",
        "idtipoPruducto": "3",
        "idProducto":"12",
        "producto": "Zapatillas Adidas Running Hombre",
        "precio":"1000",
        "foto": "./img/Running_hombre1.jpg"
    },
    {
        "tipoProducto":"Running",
        "idtipoPruducto": "3",
        "idProducto":"13",
        "producto": "Zapatillas Adidas Running Mujer",
        "precio":"1000",
        "foto": "./img/Running_mujer1.jpg"
    },
    {
        "tipoProducto":"Hockey",
        "idtipoPruducto": "4",
        "idProducto":"14",
        "producto": "Palo Hokey Master",
        "precio":"1000",
        "foto": "./img/PaloHockey1.jpg"
    },
    {
        "tipoProducto":"Hockey",
        "idtipoPruducto": "4",
        "idProducto":"15",
        "producto": "Zapatillas Adidas Running Mujer",
        "precio":"1000",
        "foto": "./img/Running_mujer1.jpg"
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botones = document.querySelectorAll(".botonito");
let botonesAgregas = document.querySelectorAll(".producto-agregar");

productosCargados(productos);

botones.forEach(boton => {
    boton.addEventListener("click",(e) => {
        if (e.currentTarget.id=="Todos") {
            productosCargados(productos);
        } else {
            const botondeProductos = productos.filter(producto => producto.tipoProducto === e.currentTarget.id);
            // console.log(e.currentTarget.id);
            // console.log("-------");
            // console.log(botondeProductos);
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
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id=${producto.idProducto}>Agregar</button>
            </div>`;
        
        contenedorProductos.append(div);
        })
        actualizarBotonesAgregar();
        console.log(botonesAgregas);
}
/*--------------------------------------------*/
function actualizarBotonesAgregar() {
    botonesAgregas = document.querySelectorAll(".producto-agregar");
    botonesAgregas.forEach(boton => {
        boton.addEventListener("click",agregaCarrito);
    })
    console.group(botonesAgregas);
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
        //productosEnCarrito.push(productos.find(producto => producto.idProducto === id));
        const i = productosEnCarrito.findIndex(producto => producto.idProducto === id);
        productosEnCarrito[i].cantidad++;
    } else {    
        agregarProducto.cantidad=1;
        productosEnCarrito.push(agregarProducto);// no me sirve el "productos.find(producto => producto.idProducto === id)" porque sino lo le puedo agregar la cantidad al producto que voy a agregar. O lo hago desde aca, o le tengo que poner cantidad en el JSON. Pero esa cantidad seria el stock y aca la idea no es bajar el stock sino agregar al carrito
    }
    //Guardo en LS
    localStorage.setItem("Productos",JSON.stringify(productosEnCarrito));
    console.log(productosEnCarrito);
}

