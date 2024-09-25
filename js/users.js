

function register() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  // Verificar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Verificar si el correo ya está registrado
  const emailExistente = usuarios.find(usuario => usuario.email === email);
  if (emailExistente) {
    alert('Este correo ya está registrado');
    return;
  }

  // Mostrar un mensaje de "Cargando..." mientras se envía el correo
  alert('Enviando correo de confirmación, por favor espera...');

  // Enviar correo de confirmación usando EmailJS
  emailjs.send('service_lyng8cj', 'template_qukgbcr', {
    user_name: nombre,
    user_email: email
  })
  .then(function(response) {
    console.log('Correo de confirmación enviado:', response.status, response.text);

    // Asignar rol de administrador si el correo es el del creador
    let rol = 'cliente'; // Por defecto, todos los usuarios son clientes
    if (email === "tu_correo@example.com") {
      rol = 'administrador';  // El creador del sitio es administrador
    }

    // Guardar el nuevo usuario en localStorage solo si el correo fue enviado correctamente
    usuarios.push({ nombre, email, telefono, password, rol });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Se ha enviado un correo de confirmación.');
    window.location.href = 'login.html'; // Redirigir al inicio de sesión
  }, function(error) {
    console.error('Error al enviar el correo:', error);
    alert('Ocurrió un error al enviar el correo de confirmación. Verifica tu conexión e inténtalo nuevamente.');
  });
});
}

document.addEventListener("DOMContentLoaded", function() {
  register();
});