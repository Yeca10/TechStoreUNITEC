function login() {
  // Verificar si hay un usuario logueado en localStorage
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

  if (usuarioLogueado) {
    // Mostrar perfil y ocultar botones de login y registro
    document.getElementById('perfilUsuario').style.display = 'block';
    document.getElementById('nombreUsuario').textContent = usuarioLogueado.nombre;

    // Verificar si el usuario tiene una foto almacenada, si no, usar una por defecto
    const fotoPerfil = usuarioLogueado.foto || 'img/default-profile.png';
    document.getElementById('fotoPerfil').src = fotoPerfil;

    // Ocultar los botones de login y registro
    document.getElementById('botonesLogin').style.display = 'none';
  }

  // Función para cerrar sesión

}

if(document.getElementById('cerrarSesion')){
  document.getElementById('cerrarSesion').addEventListener('click', function() {
    // Eliminar los datos de usuario de localStorage
    localStorage.removeItem('usuarioLogueado');
    
    // Recargar la página actual
    location.reload();
  });

}

function login_panel() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Validar si es el creador del sitio
      if (email === "tu_correo@example.com" && password === "tu_contraseña") {
        alert("Bienvenido, administrador.");
        localStorage.setItem('usuarioLogueado', JSON.stringify({ nombre: "Administrador", rol: "administrador", foto: "img/admin-profile.png" }));
        window.location.href = 'admin.html';  // Redirigir al panel de administración
        return;
      }

      // Verificar si el usuario existe en la lista de usuarios
      const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

      if (usuario) {
        // Almacenar el usuario logueado en localStorage
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

        // Validar el rol del usuario
        if (usuario.rol === "administrador") {
          alert('Bienvenido, administrador.');
          window.location.href = 'admin.html';
        } else {
          alert('Inicio de sesión exitoso.');
          window.location.href = 'index.html';
        }
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    });
}


document.addEventListener("DOMContentLoaded", function() {

  if (window.location.pathname.includes("login.html")) {
    login();
    login_panel();
  }
  else{
    login();
  }

});
