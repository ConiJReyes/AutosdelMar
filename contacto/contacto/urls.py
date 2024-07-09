# contacto/urls.py

from django.urls import path
from . import views

app_name = 'contacto'

urlpatterns = [
    path('crear/', views.contacto_create_view, name='crear'),
    path('listar/', views.contacto_listar_view, name='listar'),
]
