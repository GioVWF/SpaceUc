from django.shortcuts import render, redirect
from main.views import home
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
# Create your views here.

def login_page(request):
    return render(request, 'login.html')

def log_in_(request):

    username_form = request.POST['rut']
    password_form = request.POST['password']
    user = authenticate(username = username_form, password = password_form)
    
    if user is not None:
        
        if user.is_active:

            login(request, user)

            return redirect(home)
        
        else:

            return render(request, 'level-question.html')
    else:
        
        return redirect(login_page) 

def log_out_(request):

    logout(request)

    return redirect(home)
