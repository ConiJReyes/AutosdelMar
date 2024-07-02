from django.db import models

class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length=50, unique=True)
    correo = models.EmailField(max_length=100, unique=True)
    contrasena = models.CharField(max_length=255)
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre_usuario
