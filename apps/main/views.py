# apps/main/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import logout, login
from django.contrib.auth.models import User
from apps.main.forms import RegistroForm
from .models import Producto
from .forms import ContactoForm, ProductoForm
from django.contrib import messages
from django.core.paginator import Paginator
from django.http import Http404
from django.shortcuts import render, HttpResponse
from .Carrito import Carrito


#View Login 
@login_required
def home(request):
    data = {
        'home': home
    }
    return render(request, 'home.html', data)

#view vehiculos
def vehiculos(request):
    data = {
        'vehiculos': vehiculos
    }

    return render(request, 'vehiculos.html', data)

#views carrito (agregar, eliminar, limpiar)
def carrito(request):
    productos = Producto.objects.all()
    return render(request, "carrito.html", {'productos': productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("carrito")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("carrito")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("carrito")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("carrito")

# View Contacto
def contacto(request):
    data = {
        'form': ContactoForm()
    }

    if request.method == 'POST':
        form = ContactoForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Contacto enviado correctamente")
        else:
            data["form"] = form

    return render(request, 'contacto.html', data)

@permission_required('apps.add_producto')
#view agregar productos
def agregar_productos(request):

    data = {
        'form': ProductoForm()
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request, "Producto guardado correctamente")
        else:
            data["form"] = formulario

    return render(request, 'producto/agregar.html', data)

@permission_required('apps.view_producto')
#view listar productos
def listar_productos(request):
    productos = Producto.objects.all()
    page = request.GET.get('page', 1)

    try:
        paginator = Paginator(productos, 5)
        productos = paginator.page(page)
    except:
        raise Http404

    data = {
        'entity': productos,
        'paginator': paginator
    }

    return render(request, 'producto/listar.html', data)

@permission_required('apps.change_producto')
#view modificar productos
def modificar_productos(request, id):

    producto = get_object_or_404(Producto, id=id)

    data = {
        'form': ProductoForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request, "Producto modificado correctamente")
            return redirect(to="listar_productos")
        data["form"] = formulario

    return render(request, 'producto/modificar.html', data)
    
@permission_required('apps.delete_producto')
#view eliminar productos
def eliminar_productos(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    messages.success(request, "Producto eliminado correctamente")
    return redirect(to="listar_productos")

# View Registro
def registro(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            messages.success(request, "Gracias por registrarte")
            login(request, user)
            return redirect('home')
    else:
        form = RegistroForm()
    return render(request, 'registration/registro.html', {'form': form})

# Cerrar Sesion
def salir(request):
    logout(request)
    messages.success(request, "¡ Bienvenido !")
    return redirect('login')