from django.shortcuts import render
from db_spaceuc.models import User_ours
import requests
import json

def home(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'home.html', context)

def game(request):
    users = User_ours.objects.all()
    context = {
        'users': users
    }
    return render(request, 'game.html', context)

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
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

def resources_page(request):
    users = User_ours.objects.all()
    
    API_KEY = "qE5NtN0FYG428PJE1nu4ygkCkPEQMRHV0F33lwOp"
    url = 'https://api.nasa.gov/planetary/apod/'

    params = {
        'api_key': API_KEY,
    }

    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status() 
        data = response.json()
    except requests.exceptions.RequestException:
    
        
        data = None

    context = {
        'users': users,
        'data' : data
        
    }
    return render(request, 'resources-page.html', context)
#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

def podium(request):

    users = User_ours.objects.all()
    first_palces = User_ours.objects.all().order_by('-point_user')[:3]

    for i in range(3):
        if ( i == 0 ):
            position_one = User_ours.objects.all().order_by('-point_user')[i]
        if ( i == 1):
            position_two = User_ours.objects.all().order_by('-point_user')[i]
        if (i == 2 ):
            position_three = User_ours.objects.all().order_by('-point_user')[i]
            
    context = {
        'first_palces': first_palces,
        'position_one': position_one,
        'position_two': position_two,
        'position_three': position_three,
        'users': users,
    }

    return render(request, 'podium.html', context)




        
    