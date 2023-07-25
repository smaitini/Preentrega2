const carritoDeCompras = JSON.parse(localStorage.getItem("Productos"));

 const contenedorProductos= document.querySelector(".carrito-productos");
 console.log(carritoDeCompras);
 let precioTotal =0;
 carritoDeCompras.forEach(producto => {
    precioTotal= parseFloat(producto.precio * producto.cantidad)
     const div = document.createElement("div");
     div.classList.add("carrito-producto");
     div.innerHTML=`
     <img class="imagen-producto" src=${producto.foto} alt="">
     <div class="titulo-producto"><p>Producto</p><h3>${producto.producto}</h3></div>
     <div class="titulo-producto"><p>Cantidad</p><h3>${producto.cantidad}</h3></div>
     <div class="titulo-producto"><p>Precio Unitario</p><h3>${producto.precio}</h3></div>
     <div class="titulo-producto"><p>Precio Total</p><h3>${precioTotal}</h3></div>`
     contenedorProductos.append(div);
});
// [{"tipoProducto":"Futbol","idtipoPruducto":"1","idProducto":"1","producto":"Pelota nro 5 Profesional","precio":"1000","foto":"./img/pelota.jpg","cantidad":1}] 