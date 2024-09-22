# **TechStoreUNITEC**

## **Descripción del Proyecto**

**TechStoreUNITEC** es una plataforma de comercio electrónico diseñada para la venta de **teléfonos móviles** y **accesorios tecnológicos**. Los usuarios pueden registrarse, iniciar sesión, navegar por el catálogo de productos, agregar productos al carrito, realizar compras y hacer un seguimiento de sus pedidos. Además, cuenta con un panel de administración para gestionar usuarios, productos y configuraciones especiales, como ofertas y descuentos.

### **Características Principales**
- **Registro de Usuarios**: Los usuarios pueden registrarse proporcionando información básica.
- **Roles de Usuario**:
  - **Administrador**: Acceso total para gestionar productos, usuarios y pedidos.
  - **Cliente**: Acceso para navegar, agregar productos al carrito y realizar compras.
- **Carrito de Compras**: Los usuarios pueden agregar productos al carrito y proceder con el pago.
- **Historial de Compras y Seguimiento de Pedidos**.
- **Panel de Administración**: Los administradores pueden gestionar usuarios, productos y configurar ofertas especiales.
- **Página de Contacto**: Los usuarios pueden enviar consultas a través del formulario de contacto.

---

## **Requisitos del Proyecto**

Este proyecto se ha desarrollado utilizando las siguientes tecnologías:

- **HTML5** para la estructura.
- **CSS3** y **Bootstrap** para el diseño responsivo.
- **JavaScript** para la lógica de la página.
- **LocalStorage** para el almacenamiento de datos del cliente.
- **EmailJS** (opcional) para el envío de correos de confirmación.

---

## **Estructura del Proyecto**

```bash
├── index.html                 # Página de inicio
├── productos.html              # Página de catálogo de productos
├── carrito.html                # Carrito de compras
├── registro.html               # Registro de usuarios
├── login.html                  # Inicio de sesión
├── perfil.html                  # Inicio de sesión
├── historial_compras.html      # Historial de compras
├── detalles_producto.html      # Historial de compras
├── seguimiento_pedidos.html    # Seguimiento de pedidos
├── contacto.html               # Página de contacto
├── admin.html                  # Panel de administración
├── admin_usuarios.html         # Gestión de usuarios
├── admin_ordenes.html          # Gestión de pedidos
├── admin_configuracion.html    # Configuración de ofertas
├── admin_informes.html         # Informes y estadísticas
└── README.md                   # Este archivo README
```

---

## **Instalación y Configuración**

### **Requisitos previos**
- Navegador web actualizado.
- **Git** para clonar el repositorio (opcional).

### **Clonación del Proyecto**

Para clonar el repositorio, abre una terminal y ejecuta:

```bash
git clone https://github.com/Yeca10/TechStoreUNITEC.git
```

### **Configuración del Proyecto**

Este proyecto no requiere instalación adicional. Simplemente abre los archivos HTML en tu navegador. Si deseas activar el envío de correos de confirmación, deberás configurar **EmailJS**.

1. **Configurar EmailJS**:
   - Crea una cuenta en [EmailJS](https://www.emailjs.com/).
   - Configura un servicio de correo.
   - Obtén tus identificadores y agrégalos a `registro.html`.

---

## **Uso del Proyecto**

### **Página de Inicio**
La página principal muestra una vista general del sitio con productos destacados y promociones especiales.

### **Registro e Inicio de Sesión**
Los usuarios pueden registrarse y luego iniciar sesión para acceder a la tienda y funcionalidades como el carrito de compras.

### **Carrito de Compras**
Los usuarios pueden agregar productos al carrito y proceder con la compra.

### **Gestión de Productos y Usuarios** (Solo para Administradores)
Los administradores tienen acceso a la gestión de usuarios y productos desde el panel de administración.

---

## **Funcionalidades Adicionales**

- **Validación de Contraseñas** en el registro.
- **Historial de Compras** para que los usuarios puedan revisar sus transacciones anteriores.
- **Informes y Estadísticas** de ventas en el panel de administración.

---

## **Contribuciones**

Si deseas contribuir al proyecto, puedes hacer lo siguiente:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Haz un push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un **pull request**.

Este Proyecto es totalmente publico a  los usuarios para que puedan tener una mejor experiencia.

## **Contacto**

Para consultas o sugerencias, contacta al equipo de desarrollo en **yecastillo7@poligran.edu.co**.
