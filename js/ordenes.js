// Cargar pedidos desde localStorage
const ordenes = JSON.parse(localStorage.getItem('ordenes')) || [];

// Función para cargar los pedidos en la tabla
function cargarPedidos() {
  const tablaPedidos = document.getElementById('tablaPedidos');
  tablaPedidos.innerHTML = ''; // Limpiar la tabla antes de cargar

  ordenes.forEach(orden => {
    const productos = orden.productos.map(p => p.nombre).join(', '); // Nombres de los productos
    const fila = `
      <tr>
        <td>${orden.id}</td>
        <td>${productos}</td>
        <td>$${orden.total}</td>
        <td>${orden.estado}</td>
      </tr>
    `;
    tablaPedidos.innerHTML += fila; // Añadir fila a la tabla
  });
}

// Función para cargar las órdenes en la tabla
function cargarOrdenes() {
  const tablaOrdenes = document.getElementById('tablaOrdenes');
  tablaOrdenes.innerHTML = ''; // Limpiar la tabla antes de cargar

  ordenes.forEach(orden => {
    const productos = orden.productos.map(p => p.nombre).join(', '); // Nombres de los productos
    const fila = `
      <tr>
        <td>${orden.id}</td>
        <td>${productos}</td>
        <td>$${orden.total}</td>
        <td>${orden.estado}</td>
      </tr>
    `;
    tablaOrdenes.innerHTML += fila; // Añadir fila a la tabla
  });
}

// Función para cargar el historial de compras en la tabla
function cargarHistorialCompras() {
  const tablaHistorial = document.getElementById('tablaHistorial');
  tablaHistorial.innerHTML = ''; // Limpiar tabla antes de cargar

  ordenes.forEach(orden => {
    const productos = orden.productos.map(p => p.nombre).join(', '); // Obtener los nombres de los productos
    const fila = `
      <tr>
        <td>${orden.id}</td>
        <td>${productos}</td>
        <td>$${orden.total}</td>
        <td>${new Date().toLocaleDateString()}</td>
      </tr>
    `;
    tablaHistorial.innerHTML += fila; // Añadir la fila con los datos del pedido
  });
}

// Función para cargar las ventas en la tabla
function cargarVentas() {
  const tablaVentas = document.getElementById('tablaVentas');
  tablaVentas.innerHTML = ''; // Limpiar tabla antes de cargar

  ordenes.forEach(orden => {
    const productos = orden.productos.map(p => p.nombre).join(', '); // Nombres de los productos
    const fila = `
      <tr>
        <td>${orden.id}</td>
        <td>${productos}</td>
        <td>$${orden.total}</td>
        <td>${new Date().toLocaleDateString()}</td>
      </tr>
    `;
    tablaVentas.innerHTML += fila; // Añadir fila a la tabla
  });
}

// Generar gráfico de ventas
function generarGrafico() {
  const ctx = document.getElementById('graficoVentas').getContext('2d');
  const totales = ordenes.map(orden => orden.total); // Obtener los totales de cada orden

  const graficoVentas = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ordenes.map(orden => `Pedido ${orden.id}`), // Etiquetas
      datasets: [{
        label: 'Ventas ($)',
        data: totales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Cargar ventas y generar gráfico al cargar la página
cargarVentas();
generarGrafico();

// Cargar pedidos al cargar la página
cargarPedidos();

// Cargar las órdenes al cargar la página
cargarOrdenes();

// Cargar el historial de compras al cargar la página
cargarHistorialCompras();