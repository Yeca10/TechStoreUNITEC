let carrito

// Función para cargar los productos del carrito en la tabla
function cargarCarrito() {
  const carritoTabla = document.getElementById('carritoTabla');
  carritoTabla.innerHTML = ''; // Limpiar tabla antes de cargar

  let total = 0;
  carrito.forEach((producto, index) => {
    const totalProducto = producto.precio;
    total += totalProducto;
    const fila = `
      <tr>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>1</td> <!-- Cantidad fija por simplicidad -->
        <td>$${totalProducto}</td>
        <td><button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button></td>
      </tr>
    `;
    carritoTabla.innerHTML += fila; // Añadir producto a la tabla
  });

  document.getElementById('totalCarrito').textContent = total; // Actualizar el total del carrito
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1); // Eliminar producto del array
  localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios en localStorage
  cargarCarrito(); // Recargar la tabla
}

// Función para procesar la compra
function procesarCompra() {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }

  // Guardar la orden de compra en localStorage
  const ordenes = JSON.parse(localStorage.getItem('ordenes')) || [];
  const nuevaOrden = {
    id: ordenes.length + 1,
    productos: carrito,
    total: document.getElementById('totalCarrito').textContent,
    estado: 'En proceso'
  };
  ordenes.push(nuevaOrden);
  localStorage.setItem('ordenes', JSON.stringify(ordenes)); // Guardar la orden en localStorage

  alert('Compra procesada con éxito.');
  carrito = []; // Vaciar el carrito
  localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito vacío
  cargarCarrito(); // Recargar la tabla
}
// Cargar el carrito al cargar la página

document.addEventListener("DOMContentLoaded", function() {
  carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Cargar el carrito desde localStorage
  // Código que quieres ejecutar cuando el DOM esté listo
  cargarCarrito();
});