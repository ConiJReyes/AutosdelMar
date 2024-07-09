# contacto/views.py

from django.shortcuts import render, redirect
from .forms import ContactoForm

def contacto_view(request):
    if request.method == "POST":
        form = ContactoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('contacto')
    else:
        form = ContactoForm()
    return render(request, 'contacto/contacto.html', {'form': form})
