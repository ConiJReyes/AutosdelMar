# contacto/views.py

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contacto

@csrf_exempt
def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        reason = request.POST.get('reason')
        message = request.POST.get('message')

        contacto = Contacto(name=name, email=email, reason=reason, message=message)
        contacto.save()

        return JsonResponse({'success': True, 'message': 'Form submitted successfully!'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method'})