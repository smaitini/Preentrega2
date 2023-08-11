const carritoDeCompras = JSON.parse(localStorage.getItem("Productos"));

const contenedorProductos = document.querySelector(".carrito-productos");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
let totalizador = document.querySelector("#total");
let comprar = document.querySelector("#comprar");

comprar.addEventListener("click", compra);

let precioTotal = 0;
let totalDeTotales = 0;

function compra(){
  Swal.fire({
    icon: 'information',
    title: 'Compra Exitosa',
    text: 'Perfecto, has comprado los productos',
  })
}
function cargarProductosCarrito() {
  totalDeTotales = 0;
  contenedorProductos.innerHTML = "";
  if (carritoDeCompras) {
    carritoDeCompras.forEach((producto) => {
      precioTotal = parseFloat(producto.precio * producto.cantidad);
      totalDeTotales += precioTotal;
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
         <img class="carrito-producto-imagen" src=${producto.foto} alt="">
         <div class="titulo-producto"><p>Producto</p><h3>${producto.producto}</h3></div>
         <div class="titulo-producto"><p>Cantidad</p><h3>${producto.cantidad}</h3></div>
         <div class="titulo-producto"><p>Precio Unitario</p><h3>${producto.precio}</h3></div>
         <div class="titulo-producto"><p>Precio Total</p><h3>${precioTotal}</h3></div>
         <div class="carrito-producto-eliminar" id=${producto.idProducto}>Eliminar</div>`;
      contenedorProductos.append(div);
      //totalizar(totalDeTotales); Lo pongo abajo sino cuando dejo el carrito vacio no me saca el utimo precio porque no entra por acá!!!!!!
    });
  } 
  totalizar(totalDeTotales);
  actualizarBotonesEliminar(); //Se tienen que cargar cada ver que haya algun movimiento en el carro de compras
}

cargarProductosCarrito(); //Se tiene que cargar cada vez que entra
// [{"tipoProducto":"Futbol","idtipoPruducto":"1","idProducto":"1","producto":"Pelota nro 5 Profesional","precio":"1000","foto":"./img/pelota.jpg","cantidad":1}]

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarItemDelCarro);
  });
}

function eliminarItemDelCarro(e) {
  let idBotonito = e.currentTarget.id; //trae el valor del ID de "<div class="carrito-producto-eliminar" id=${producto.idProducto}>Eliminar</div>"
  let i = carritoDeCompras.findIndex((item) => item.idProducto === idBotonito);
  carritoDeCompras.splice(i, 1);
  localStorage.setItem("Productos", JSON.stringify(carritoDeCompras)); //para guardar en LS el nuevo valor
  cargarProductosCarrito();
  Toastify({
    text: "Producto Eliminado",
    style: {
      background: "linear-gradient(to right, #c1121f, #f48c06)",
    },
    offset: {
      x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
  }).showToast();
}

function totalizar(valor) {
  totalizador.innerHtml = "";
  totalizador.innerHTML = `Total ${valor}`;
console.log(totalizador)
}
