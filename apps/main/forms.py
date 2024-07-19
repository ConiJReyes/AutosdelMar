# apps/users/forms.py
from django import forms
from django.contrib.auth.models import User
from .models import Contacto, OPCIONES_CONSULTA, Producto

class RegistroForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if password != confirm_password:
            raise forms.ValidationError("Las contraseñas no coinciden.")

        return cleaned_data

#FORM DE CONTACTO:
class ContactoForm(forms.ModelForm):

    nombre = forms.CharField(widget=forms.TextInput(attrs={"class":"form-control"}))
    correo = forms.EmailField(widget=forms.TextInput(attrs={"class":"form-control"}))
    motivo = forms.ChoiceField(choices=OPCIONES_CONSULTA, widget=forms.Select(attrs={"class": "form-control"}))
    mensaje = forms.CharField(widget=forms.TextInput(attrs={"class":"form-control"}))

    class Meta:
        model = Contacto
        #fields = ['nombre', 'correo', 'motivo', 'mensaje']
        fields = '__all__'


#FORM DE PRODUCTO
class ProductoForm(forms.ModelForm):

    nombre = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))
    categoria = forms.CharField(widget=forms.TextInput(attrs={"class": "form-control"}))
    precio = forms.IntegerField(widget=forms.NumberInput(attrs={"class": "form-control"}))
    imagen = forms.ImageField(widget=forms.FileInput(attrs={"class": "form-control-file"}), required=False)

    class Meta:
        model = Producto
        fields = '__all__'
