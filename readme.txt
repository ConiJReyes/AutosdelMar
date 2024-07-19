# Autos del Mar

Este proyecto es una aplicación web desarrollada con Django para la gestión, visualización de vehículos y productos relacionados.

## Contenido del Proyecto

- `.gitignore`: Archivo para excluir archivos y carpetas del control de versiones.
- `.vscode`: Configuraciones específicas de Visual Studio Code.
- `apps`: Directorio que contiene las aplicaciones Django del proyecto.
- `db.sqlite3`: Base de datos SQLite del proyecto.
- `django_mysql`: Configuraciones y extensiones para usar MySQL con Django.
- `manage.py`: Script de Django para la gestión del proyecto.
- `media`: Carpeta para almacenar archivos subidos por los usuarios.
- `myenv`: Entorno virtual para gestionar las dependencias del proyecto.
- `procesar_imagenes.py`: Script para procesar imágenes.
- `readme.txt`: Archivo que estás leyendo.
- `requirements.txt`: Lista de dependencias del proyecto.
- `templates`: Directorio que contiene las plantillas HTML del proyecto.

## Requisitos del Sistema

- Python 3.x
- Django
- MySQL
- Las dependencias listadas en `requirements.txt`

## Instrucciones de Instalación

1. Clonar el repositorio:
 
   git clone <https://github.com/ConiJReyes/AutosdelMar.git>

2. Crear y activar el entorno virtual:

   python -m venv env
   source env/bin/activate  # En Windows: source env/Scripts/activate

3. Instalar dependencias:
   
   pip install -r requirements.txt

4. Realizar migraciones a la B.D:

   python manage.py migrate

5. Crear super usuario ADMIN:

   python manage.py superuser

6. Ejecutar la aplicacion:

   python manage.py runserver
