*Proyecto Autos del Mar

Este proyecto es una aplicación web para la gestión de autos y servicios relacionados.

*Contenido del proyecto

- assets/: Archivos estáticos utilizados en la aplicación.
- .gitignore: Archivo para excluir ciertos archivos y directorios del control de versiones.
- .vscode/: Configuración específica para Visual Studio Code.
- db.sqlite3: Base de datos SQLite utilizada por la aplicación.
- .git/: Directorio de control de versiones Git.
- productos/: Módulo relacionado con la gestión de productos.
- requirements.txt: Archivo con las dependencias necesarias para ejecutar la aplicación.
- django_mysql/: Módulo de integración con MySQL para Django.
- contacto/: Módulo relacionado con la gestión de contactos.
- env/: Entorno virtual para la gestión de dependencias de Python.
- manage.py: Archivo de gestión de Django para realizar varias operaciones.
- *procesar_imagenes.py: Script para el procesamiento de imágenes.
- *index.html: Página de inicio de la aplicación.

*Requisitos

- Python 3.x
- Django
- MySQL (opcional, si se usa `django_mysql`)

*Instalación

1. Clonar el repositorio:
 
   git clone <https://github.com/ConiJReyes/AutosdelMar.git>

2. Crear y activar el entorno virtual:

   python -m venv env
   source env/bin/activate  # En Windows: env\Scripts\activate

3. Instalar dependencias:
   
   pip install -r requirements.txt

4. Realizar migraciones a la B.D:

   python manage.py migrate

5. Ejecutar la aplicacion:

   python manage.py runserver
