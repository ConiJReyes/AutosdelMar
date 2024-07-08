from django.shortcuts import get_object_or_404, redirect
from django.contrib import messages
from productos.models import Product

def agregar_al_carrito(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    if product.stock > 0:
        # Aquí iría la lógica para agregar el producto al carrito
        # y actualizar el stock disponible después de agregarlo.
        product.stock -= 1
        product.save()
        messages.success(request, f"{product.name} se ha añadido al carrito.")
    else:
        messages.warning(request, f"Lo sentimos, {product.name} está agotado.")
    return redirect('productos:lista_productos')
