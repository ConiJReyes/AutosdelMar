# Procesamiento de imágenes con Pillow
# pip install pillow en la terminal:

from PIL import Image
import os

# Definir la ruta de origen y destino de las imágenes
source_dir = "c:/Users/Coni/Desktop/img"
dest_dir = "c:/Users/Coni/Desktop/preprocessed"
os.makedirs(dest_dir, exist_ok=True)

#imagenes que se van a importar:
images = [
    "logoHyundai.jpg", "logoPrincipal.jpg", "logoPrincipal2.jpeg",
    "tiendafuera.jpg", "ubicacion.jpeg", "logoAccesorios.jpg",
    "logoBateria.jpg"
]

# Preprocesar las imágenes: redimensionar y guardar en el directorio de destino
for image_name in images:
    # Cargar la imagen
    img = Image.open(os.path.join(source_dir, image_name))

    # Redimensionar la imagen si es necesario
    img = img.resize((800, 600))  # Ajustar el tamaño según sea necesario

    # Guardar la imagen en el directorio de destino
    img.save(os.path.join(dest_dir, image_name))
