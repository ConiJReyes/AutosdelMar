from django.db import models

# Create your models here.

#modelo para producto
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    precio = models.IntegerField()
    imagen = models.ImageField(upload_to="productos", null=True)

    def __str__(self):
        return f'{self.nombre} -> {self.precio}'

OPCIONES_CONSULTA = [
    (0, "Contactar con un ejecutivo"),
    (1, "Hacer un reclamo"),
    (2, "Cotizar un auto")
]

#modelo para contacto
class Contacto(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.EmailField()
    motivo = models.IntegerField(choices=OPCIONES_CONSULTA)
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre
        