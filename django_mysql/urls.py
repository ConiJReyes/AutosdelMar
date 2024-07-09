# autosdelmar/urls.py

from django.contrib import admin
from django.urls import path, include
from contacto.views import contacto_view  # Asegúrate de importar la vista correcta
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('contacto/', views.contacto_view, name='contacto'),
    path('productos/', include('productos.urls')),
    # Otras rutas si las tienes
]
