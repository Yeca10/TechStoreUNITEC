const urlParams = new URLSearchParams(window.location.search);
const nombreProducto = urlParams.get('nombre');
// Verificar si hay un usuario logueado en localStorage
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

// Array de productos (debe coincidir con el array en productos.html)
const productos = [
  { nombre: 'Producto 1', precio: 100, descripcion: 'Este es el Producto 1.', img: 'img/producto1.jpg' },
  { nombre: 'Producto 2', precio: 200, descripcion: 'Este es el Producto 2.', img: 'img/producto2.png' },
  { nombre: 'Producto 3', precio: 300, descripcion: 'Este es el Producto 3.', img: 'img/producto3.jpg' }
];

const producto = productos.find(p => p.nombre === nombreProducto);

document.addEventListener("DOMContentLoaded", function() {
  if (producto) {
    document.getElementById('nombreProducto').textContent = producto.nombre;
    document.getElementById('precioProducto').textContent = `$${producto.precio}`;
    document.getElementById('imgProducto').src = producto.img;
    document.getElementById('descripcionProducto').textContent = producto.descripcion;
  }
  if (usuarioLogueado) {
    // Mostrar perfil y ocultar botones de login y registro
    document.getElementById('perfilUsuario').style.display = 'block';
    document.getElementById('nombreUsuario').textContent = usuarioLogueado.nombre;
    const fotoPerfil = usuarioLogueado.foto || 'img/default-profile.png';
    document.getElementById('fotoPerfil').src = fotoPerfil;
    document.getElementById('botonesLogin').style.display = 'none';
  }
});

function agregarAlCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${producto.nombre} ha sido agregado al carrito.`);
}

// Función para cerrar sesión
document.getElementById('cerrarSesion').addEventListener('click', function() {
// Eliminar los datos de usuario de localStorage
localStorage.removeItem('usuarioLogueado');
// Recargar la página actual
location.reload();
});