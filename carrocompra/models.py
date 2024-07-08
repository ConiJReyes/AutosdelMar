from django.db import models
from usuarios.models import Usuario  # Asumiendo que ya tienes un modelo Usuario

class CarritoCompra(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True, blank=True)
    cantidad = models.IntegerField()
    agregado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Carrito {self.id_carrito} - Usuario {self.usuario} - Auto {self.auto}"
