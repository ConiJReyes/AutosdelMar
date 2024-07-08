# En productos/models.py
from django.db import models

class Product(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to='productos/', null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    stock = models.IntegerField(default=5)#stock disponible
   
    def __str__(self):
        return self.nombre
