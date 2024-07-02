# En productos/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('agregar-al-carrito/', views.agregar_al_carrito, name='agregar_al_carrito'),
    # Otras rutas de la aplicación productos
]
