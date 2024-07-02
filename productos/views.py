# En productos/views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
import json

def index(request):
    return HttpResponse("Bienvenido a la sección de productos")

def agregar_al_carrito(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        product_id = data.get('product_id')
        name = data.get('name')
        price = data.get('price')
        image_url = data.get('image_url')

        # Guardar el producto en la base de datos
        product = Product.objects.create(
            name=name,
            price=price,
            image_url=image_url
            # Añade más campos según tu modelo de Producto
        )
        product.save()

        return JsonResponse({'message': 'Producto agregado correctamente'}, status=200)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)