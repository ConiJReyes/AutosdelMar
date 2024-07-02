from PIL import Image, ImageEnhance
import os

# Rutas de carpetas
input_folder = os.path.join('assets', 'img')
output_folder = os.path.join('assets', 'img_procesadas')

# Asegurarse de que la carpeta de salida existe
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Definir los tamaños de salida según el tipo de imagen
sizes = {
    'logo.png': (350, 100),  # Tamaño para logo AutosDelMar
    'ubicacion.jpeg': (400, 300), # Tamaño para logo ubicacion del footer
    'carritoLogo.png': (40, 40),  # Tamaño para logo carrito
    'tiendafuera.jpg': (800, 450),  # Tamaño para carrousel 1
    'logoHyundai.jpg': (1170, 600),  # Tamaño para carrousel 2
    'logoPrincipal2.jpeg': (1200, 675),  # Tamaño para carrousel 3
    'default': (300, 200)     # Tamaño para las demas imagenes
}

# Procesar cada imagen en la carpeta de entrada
for filename in os.listdir(input_folder):
    img_path = os.path.join(input_folder, filename)
    
    if os.path.isfile(img_path):
        # Obtener el tamaño específico según el nombre de archivo
        output_size = sizes.get(filename, sizes['default'])
        
        # Abrir la imagen
        img = Image.open(img_path)
        
        # Ajustar tamaño
        img = img.resize(output_size)
        
        # Convertir imágenes RGBA a RGB
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        
        # Guardar la imagen modificada en la carpeta de salida
        output_path = os.path.join(output_folder, filename)
        img.save(output_path, quality=90)
        
        print(f'Processed {filename} with size {output_size}')
