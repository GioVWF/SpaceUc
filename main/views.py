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

def levels_info(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'levels-info.html', context)

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

def podium(request):

    users = User_ours.objects.all()
    first_palces = User_ours.objects.all().order_by('-point_user')[:3]

    context = {
        'first_places' : first_palces,
        'users': users,
    }

    return render(request, 'podium.html', context)




        
    