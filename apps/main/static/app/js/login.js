document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario de registro
    document.getElementById('formRegistro').addEventListener('submit', handleRegister);
    document.getElementById('formInicioSesion').addEventListener('submit', handleLogin);
    showSection('inicio');

    // Agregar el evento de clic a los enlaces de navegación
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Agregar eventos de navegación a botones específicos de productos
    ['botonProductos1', 'botonProductos2', 'botonProductos3', 'botonProductos4'].forEach(btnId => {
        document.getElementById(btnId).addEventListener('click', () => showSection('productos'));
    });

    // Agregar eventos de navegación a botones específicos de autos
    ['btnAutos1', 'btnAutos2', 'btnAutos3', 'btnAutos4'].forEach(btnId => {
        document.getElementById(btnId).addEventListener('click', () => showSection('vehiculos'));
    });
});

// Función para manejar el registro
function handleRegister(event) {
    event.preventDefault();

    const nombre = document.getElementById('nameRegister').value.trim();
    const correo = document.getElementById('emailRegister').value.trim();
    const contrasena = document.getElementById('passwordRegister').value.trim();
    const mensajeRegistro = document.getElementById('mensajeRegistro');

    console.log(`Intento de registro para usuario: ${nombre}, correo: ${correo}`);

    // Validar datos
    if (!nombre || !correo || !contrasena) {
        console.error("Error: Todos los campos son obligatorios");
        mostrarMensaje("Todos los campos son obligatorios", "alert-danger", mensajeRegistro);
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(usuario => usuario.correo === correo);

    if (usuarioExistente) {
        console.warn(`Advertencia: El correo ${correo} ya está registrado`);
        mostrarMensaje("¡El correo ya está registrado!", "alert-danger", mensajeRegistro);
    } else {
        const nuevoUsuario = { nombre, correo, contrasena };
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        console.log(`Registro exitoso para usuario: ${nombre}, correo: ${correo}`);
        mostrarMensaje("¡Registro exitoso!", "alert-success", mensajeRegistro);
        document.getElementById('formRegistro').reset(); // Limpiar formulario después de registrar
    }
}

// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault(); 

    const correo = document.getElementById('emailLogin').value.trim();
    const contrasena = document.getElementById('password').value.trim();
    const errorInicioSesion = document.getElementById('errorInicioSesion');

    console.log(`Intento de inicio de sesión para correo: ${correo}`);

    // Validar datos
    if (!correo || !contrasena) {
        console.error("Error: Todos los campos son obligatorios");
        mostrarMensaje("Todos los campos son obligatorios", "alert-danger", errorInicioSesion);
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasena);

    if (usuarioEncontrado) {
        console.log(`Inicio de sesión exitoso para usuario: ${usuarioEncontrado.nombre}`);
        alert(`¡Bienvenido, ${usuarioEncontrado.nombre}! Has iniciado sesión correctamente.`);
        window.location.href = 'index.html';
    } else {
        console.warn(`Advertencia: Inicio de sesión fallido para correo: ${correo}`);
        mostrarMensaje("Correo o contraseña incorrectos", "alert-danger", errorInicioSesion);
    }
}

// Función para validar correo electrónico usando expresión regular simple
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje, tipo, elemento) {
    elemento.textContent = mensaje;
    elemento.className = `alert ${tipo}`;
    elemento.style.display = "block";
}
