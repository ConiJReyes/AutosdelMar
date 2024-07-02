// Datos de ejemplo adicionales, incluyendo imágenes
const vehiculos = [
    {
        marca: "Toyota",
        modelo: "Hilux",
        annio: 2023,
        tipo: "Camioneta",
        motor: "2.0L I4",
        transmision: "Automatica",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Toyota-Logo2.jpg" // URL de la imagen de la Toyota Hilux
    },
    {
        marca: "Volkswagen",
        modelo: "Amarok",
        annio: 2023,
        tipo: "Camioneta",
        motor: "2.0L I4",
        transmision: "Automatica",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Volkswagen-Logo2.jpg" // URL de la imagen de la Volkswagen Amarok
    },
    {
        marca: "Honda",
        modelo: "Pilot",
        annio: 2024,
        tipo: "Camioneta",
        motor: "3.5L V6",
        transmision: "Automatica",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Honda-Logo2.jpg" // URL de la imagen de la Honda Pilot
    },
    {
        marca: "Ford",
        modelo: "Mustang",
        annio: 2023,
        tipo: "Coupe",
        motor: "5.0L V8",
        transmision: "Automatica",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Ford-Logo2.jpg" // URL de la imagen del Ford Mustang
    },
    {
        marca: "Chevrolet",
        modelo: "Silverado",
        año: 2023,
        tipo: "Camioneta",
        motor: "6.2L V8",
        transmisión: "Automática",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Chevrolet-Logo.jpg" // URL de la imagen de la Chevrolet Silverado
    },
    {
        marca: "BMW",
        modelo: "X5",
        año: 2023,
        tipo: "SUV",
        motor: "3.0L I6",
        transmisión: "Automática",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/BMW-Logo.jpg" // URL de la imagen de la BMW X5
    },
    {
        marca: "Mercedes-Benz",
        modelo: "E-Class",
        año: 2024,
        tipo: "Sedán",
        motor: "3.0L I6",
        transmisión: "Automática",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Mercedes-Logo.jpg" // URL de la imagen del Mercedes-Benz E-Class
    },
    {
        marca: "Audi",
        modelo: "Q5",
        año: 2024,
        tipo: "SUV",
        motor: "2.0L I4",
        transmisión: "Automática",
        tipoCombustible: "Gasolina",
        imagen: "./assets/img_procesadas/Audi-Logo.jpg" // URL de la imagen del Audi Q5
    }
];

// Función para mostrar los datos en el HTML con imágenes y botón de detalle y cotización
function displayVehiculosData(data) {
    const vehiculosDataDiv = document.getElementById('vehiculos-data');
    vehiculosDataDiv.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach((vehiculo, index) => {
            const vehiculoCard = document.createElement('div');
            vehiculoCard.classList.add('vehiculo-card');

            vehiculoCard.innerHTML = `
                <div class="vehiculo-image">
                    <img src="${vehiculo.imagen}" alt="${vehiculo.marca} ${vehiculo.modelo}">
                </div>
                <div class="vehiculo-info">
                    <h2>${vehiculo.marca} ${vehiculo.modelo}</h2>
                    <p><strong>Año:</strong> ${vehiculo.annio || vehiculo.año}</p>
                    <p><strong>Tipo:</strong> ${vehiculo.tipo}</p>
                    <button class="btn-ver-detalle" data-index="${index}">Ver detalles</button>
                    <button class="btn-cotizar" data-tipo="${vehiculo.marca} ${vehiculo.modelo}">Cotizar</button>
                    <div id="detalle-${index}" class="detalle-vehiculo hidden">
                        <p><strong>Motor:</strong> ${vehiculo.motor}</p>
                        <p><strong>Transmisión:</strong> ${vehiculo.transmision}</p>
                        <p><strong>Tipo de combustible:</strong> ${vehiculo.tipoCombustible}</p>
                    </div>
                </div>
            `;

            vehiculosDataDiv.appendChild(vehiculoCard);

            // Agregar evento al botón de ver detalles
            const btnDetalle = vehiculoCard.querySelector(`.btn-ver-detalle[data-index="${index}"]`);
            btnDetalle.addEventListener('click', () => {
                const detalleVehiculo = vehiculoCard.querySelector(`#detalle-${index}`);
                detalleVehiculo.classList.toggle('hidden');
            });

            // Agregar evento al botón de cotizar
            const btnCotizar = vehiculoCard.querySelector('.btn-cotizar');
            btnCotizar.addEventListener('click', () => {
                // Usar la función showSection definida globalmente en index.js
                window.showSection('contacto');
                // Rellenar automáticamente la descripción del tipo de auto
                const tipoAuto = btnCotizar.getAttribute('data-tipo');
                const descripcionInput = document.getElementById('descripcion-cotizacion');
                if (descripcionInput) {
                    descripcionInput.value = `Cotización para: ${tipoAuto}`;
                }
            });
        });
    } else {
        vehiculosDataDiv.innerHTML = '<p>No se encontraron datos</p>';
    }
}

// Ejemplo de uso: mostrar datos de todos los vehículos
const allVehiculos = vehiculos;
displayVehiculosData(allVehiculos);



// Botón para dirigir a la sección de contacto para cotizar
document.addEventListener('DOMContentLoaded', () => {
    const cotizarBtn = document.getElementById('cotizar-btn');

    if (cotizarBtn) {
        cotizarBtn.addEventListener('click', () => {
            // Usar la función showSection definida globalmente en index.js
            window.showSection('contacto');
        });
    }
});


