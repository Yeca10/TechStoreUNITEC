function  uploadProducts(params) {
  let productos = JSON.parse(localStorage.getItem('productos')) || []; // Cargar productos desde localStorage

// Función para cargar los productos en la tabla
function cargarProductos() {
  const tablaProductos = document.getElementById('tablaProductos').querySelector('tbody');
  tablaProductos.innerHTML = ''; // Limpiar tabla antes de cargar

  productos.forEach((producto, index) => {
    const fila = `
      <tr>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.categoria}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarProducto(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    tablaProductos.innerHTML += fila; // Añadir fila a la tabla
  });
}

// Función para editar un producto
function editarProducto(index) {
  const producto = productos[index];
  document.getElementById('nombre').value = producto.nombre;
  document.getElementById('precio').value = producto.precio;
  document.getElementById('categoria').value = producto.categoria;
  document.getElementById('indiceProducto').value = index; // Guardar el índice del producto a editar
}

// Función para eliminar un producto
function eliminarProducto(index) {
  productos.splice(index, 1); // Eliminar producto del array
  localStorage.setItem('productos', JSON.stringify(productos)); // Guardar cambios en localStorage
  cargarProductos(); // Recargar la tabla
}

// Guardar o actualizar un producto
document.getElementById('productoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const categoria = document.getElementById('categoria').value;
  const indiceProducto = document.getElementById('indiceProducto').value;
  const imagen = document.getElementById('imagen').files[0]; // Obtener la imagen seleccionada

  // Convertir la imagen a base64
  if (imagen) {
    const reader = new FileReader();
    reader.onloadend = function() {
      const base64Image = reader.result;

      if (indiceProducto === '') {
        // Crear nuevo producto
        productos.push({ nombre, precio, categoria, imagen: base64Image });
      } else {
        // Actualizar producto existente
        productos[indiceProducto] = { nombre, precio, categoria, imagen: base64Image };
      }

      localStorage.setItem('productos', JSON.stringify(productos)); // Guardar cambios en localStorage
      cargarProductos(); // Recargar la tabla
      document.getElementById('productoForm').reset(); // Limpiar formulario
      document.getElementById('indiceProducto').value = ''; // Limpiar índice
    };
    reader.readAsDataURL(imagen); // Leer la imagen como base64
  }
});

// Cargar los productos al cargar la página
cargarProductos();
}

document.addEventListener("DOMContentLoaded", function() {
  uploadProducts();
});