// Manejo del formulario de registro
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formRegistro").addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nameRegister').value;
        const correo = document.getElementById('emailRegister').value;
        const contrasena = document.getElementById('passwordRegister').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuarios.find(usuario => usuario.correo === correo);

        if (usuarioExistente) {
            mostrarMensaje("¡El correo ya está registrado!", "alert-danger", "mensajeRegistro");
        } else {
            const nuevoUsuario = { nombre, correo, contrasena };
            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            mostrarMensaje("¡Registro exitoso!", "alert-success", "mensajeRegistro");
        }
    });

    // Manejo del formulario de inicio de sesión
    document.getElementById('formInicioSesion').addEventListener('submit', (event) => {
        event.preventDefault(); 

        const correo = document.getElementById('emailLogin').value;
        const contrasena = document.getElementById('password').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasena);

        if (usuarioEncontrado) {
            alert(`¡Bienvenido, ${usuarioEncontrado.nombre}! Has iniciado sesión correctamente.`);
            window.location.href = 'index.html';
        } else {
            mostrarMensaje("Correo o contraseña incorrectos", "alert-danger", "errorInicioSesion");
        }
    });

    // Mostrar la sección 'inicio' por defecto al cargar la página
    showSection('inicio');

    // Agregar el evento de clic a los enlaces de navegación
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});

// Función para mostrar un mensaje al usuario
function mostrarMensaje(mensaje, tipo, elementoId) {
    const mensajeElemento = document.getElementById(elementoId);
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = `alert ${tipo}`;
    mensajeElemento.style.display = "block";
}

// Función para mostrar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            section.classList.remove('active');
        }
    });
}

// Hacer la función showSection disponible globalmente
window.showSection = showSection;

// Función para navegar a la sección de productos
document.addEventListener('DOMContentLoaded', () => {
    const irAProductos = () => {
        showSection('productos');
    };

    document.getElementById('botonProductos1').addEventListener('click', irAProductos);
    document.getElementById('botonProductos2').addEventListener('click', irAProductos);
    document.getElementById('botonProductos3').addEventListener('click', irAProductos);
    document.getElementById('botonProductos4').addEventListener('click', irAProductos);
});

// Función para navegar a la sección de autos
document.addEventListener('DOMContentLoaded', () => {
    const irAautos = () => {
        showSection('vehiculos');
    };

    document.getElementById('btnAutos1').addEventListener('click', irAautos);
    document.getElementById('btnAutos2').addEventListener('click', irAautos);
    document.getElementById('btnAutos3').addEventListener('click', irAautos);
    document.getElementById('btnAutos4').addEventListener('click', irAautos);
});
