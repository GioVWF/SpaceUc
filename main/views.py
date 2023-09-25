from django.shortcuts import render
from db_spaceuc.models import User_ours
import requests
import json
import time 
import schedule


def home(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'home.html', context)

def navbar(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'base.html', context)


def about(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'about.html', context)

def resources_page(request):
    users = User_ours.objects.all()

     
    # API_KEY = "qE5NtN0FYG428PJE1nu4ygkCkPEQMRHV0F33lwOp"
    # url = 'https://api.nasa.gov/planetary/apod/'

    # params = {
    #     'api_key': API_KEY,
    # }

    # response = requests.get(url, params=params)
    # data = response.json()

    context = {
        'users': users
    }
    return render(request, 'resources-page.html', context)





        
    