const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
const paginaAnterior = document.referrer; // Obtener la página anterior

if (usuarioLogueado) {
  // Cargar datos del usuario logueado en el formulario
  document.getElementById('nombre').value = usuarioLogueado.nombre;
  document.getElementById('email').value = usuarioLogueado.email;

  // Cargar la foto actual si existe
  if (usuarioLogueado.foto) {
    document.getElementById('fotoActual').src = usuarioLogueado.foto;
  }
} else {
  alert('No hay usuario logueado.');
  window.location.href = 'login.html'; // Redirigir al login si no hay usuario logueado
}

// Habilitar edición en los campos
document.getElementById('editarNombre').addEventListener('click', function() {
  document.getElementById('nombre').removeAttribute('readonly');
});
document.getElementById('editarEmail').addEventListener('click', function() {
  document.getElementById('email').removeAttribute('readonly');
});
document.getElementById('editarPassword').addEventListener('click', function() {
  document.getElementById('password').removeAttribute('readonly');
});

// Función para actualizar el perfil
document.getElementById('perfilForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener nuevos datos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const foto = document.getElementById('foto').files[0]; // Obtener archivo de la foto

  // Solicitar contraseña para confirmar
  const inputPassword = prompt("Por favor, ingresa tu contraseña actual para confirmar los cambios:");

  if (inputPassword === usuarioLogueado.password) {
    // Actualizar los datos del usuario logueado
    usuarioLogueado.nombre = nombre;
    usuarioLogueado.email = email;
    if (password) {
      usuarioLogueado.password = password; // Actualizar la contraseña si se ingresó
    }

    // Si el usuario subió una nueva foto, leer el archivo
    if (foto) {
      const reader = new FileReader();
      reader.onload = function(e) {
        usuarioLogueado.foto = e.target.result; // Guardar la foto como base64
        actualizarUsuarioEnStorage(usuarioLogueado);
        alert('Perfil actualizado con éxito.');
        window.location.href = paginaAnterior; // Redirigir a la página anterior
      };
      reader.readAsDataURL(foto); // Leer el archivo
    } else {
      actualizarUsuarioEnStorage(usuarioLogueado);
      alert('Perfil actualizado con éxito.');
      window.location.href = paginaAnterior; // Redirigir a la página anterior
    }
  } else {
    alert("Contraseña incorrecta. No se han guardado los cambios.");
  }
});

// Función para actualizar el usuario en localStorage
function actualizarUsuarioEnStorage(usuarioActualizado) {
  // Buscar el índice del usuario logueado en el array de usuarios
  const indiceUsuario = usuarios.findIndex(u => u.email === usuarioLogueado.email);

  if (indiceUsuario !== -1) {
    usuarios[indiceUsuario] = usuarioActualizado; // Actualizar los datos del usuario
  } else {
    usuarios.push(usuarioActualizado); // Si no existe, agregarlo (solo en caso de nuevos usuarios)
  }

  // Guardar el array de usuarios actualizado en localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioActualizado)); // Actualizar el usuario logueado también
}