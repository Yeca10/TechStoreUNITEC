const urlParams = new URLSearchParams(window.location.search);
const nombreProducto = urlParams.get('nombre');
// Verificar si hay un usuario logueado en localStorage
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

// Array de productos (debe coincidir con el array en productos.html)
const productos = [
  { nombre: 'Piaomi X-12', precio: 150, descripcion: 'El Paiomi X-12 redefine lo que un smartphone puede ofrecer. Equipado con una pantalla AMOLED de 6.7 pulgadas, disfruta de colores vibrantes y detalles nítidos en cada imagen. Su procesador Octa-Core de última generación garantiza un rendimiento fluido, incluso con las aplicaciones más exigentes.', img: 'img/producto1.jpg' },
  { nombre: 'Vortex Pro', precio: 200, descripcion: 'El Vortex Pro es mucho más que un reloj inteligente; es tu compañero ideal para el día a día. Con un diseño elegante y ligero, su pantalla AMOLED de 1.5 pulgadas se adapta perfectamente a tu muñeca, ofreciendo colores vibrantes y una interfaz intuitiva.', img: 'img/producto2.png' },
  { nombre: 'Altex Nova 12', precio: 300, descripcion: 'El Altex Nova 12 combina un diseño elegante con una potencia inigualable para ofrecerte una experiencia móvil de alto nivel. Con su pantalla OLED Super Retina de 6.1 pulgadas, cada imagen, video y aplicación cobra vida con colores vibrantes y detalles sorprendentes.', img: 'img/producto3.jpg' }
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