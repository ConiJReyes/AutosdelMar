# contacto/models.py

from django.db import models

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    correo_electronico = models.EmailField()
    motivo = models.CharField(max_length=50)
    mensaje = models.TextField()

    def __str__(self):
        return f"{self.nombre} ({self.correo_electronico}) - {self.motivo}"
