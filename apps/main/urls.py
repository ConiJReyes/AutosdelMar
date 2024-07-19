# apps/main/urls.py
from django.urls import path
from .views import home, vehiculos, carrito, agregar_producto, eliminar_producto, restar_producto, limpiar_carrito, contacto, agregar_productos, listar_productos, modificar_productos, eliminar_productos, registro, salir

urlpatterns = [
    path('', home, name='home'),
    path('vehiculos/', vehiculos, name='vehiculos'),
    #links de seccion carrito ------------
    path('carrito/', carrito, name='carrito'),
    path('agregar/<int:producto_id>/', agregar_producto, name='Add'),
    path('eliminar/<int:producto_id>/', eliminar_producto, name='Del'),
    path('restar/<int:producto_id>/', restar_producto, name='Sub'),
    path('limpiar/', limpiar_carrito, name='CLS'),
    #links de seccion carrito ------------
    path('contacto/', contacto, name='contacto'),
    #link para vista admin ---------------
    path('agregar-productos/', agregar_productos, name='agregar_productos'),
    path('listar-productos/', listar_productos, name='listar_productos'),
    path('modificar-productos/<id>/', modificar_productos, name='modificar_productos'),
    path('eliminar-productos/<id>/', eliminar_productos, name='eliminar_productos'),
    #links para vista admin --------------
    path('registro/', registro, name='registro'),
    path('salir/', salir, name='salir'),
]
