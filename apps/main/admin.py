from django.contrib import admin
from .models import Producto, Contacto
# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombre", "precio"]
    list_editable = ["precio"]
    search_fields = ["nombre"]
    list_filter = ["nombre"]


admin.site.register(Producto, ProductoAdmin)
admin.site.register(Contacto)