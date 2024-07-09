# contacto/views.py

from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactoForm

def contacto_view(request):
    if request.method == "POST":
        form = ContactoForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Mensaje enviado con éxito.')  # Agrega el mensaje de éxito
            return redirect('contacto')  # Redirecciona a la página de contacto o donde sea necesario
    else:
        form = ContactoForm()
    
    return render(request, 'contacto/contacto.html', {'form': form})
