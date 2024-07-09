# autosdelmar/urls.py

from django.contrib import admin
from django.urls import path, include
from contacto.views import submit_form 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('submit_form/', submit_form, name='submit_form'), 
    path('productos/', include('productos.urls')), 
]

