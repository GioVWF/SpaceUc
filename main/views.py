from django.shortcuts import render, redirect
from db_spaceuc.models import User_ours
import requests
import json
from django.http import JsonResponse


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
    
    url = 'https://api.nasa.gov/planetary/apod?api_key=qE5NtN0FYG428PJE1nu4ygkCkPEQMRHV0F33lwOp'
    
    try:
        response = requests.get(url)
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


#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


def teacher_follow(request):

    users = User_ours.objects.all()
    students = User_ours.objects.filter(user_type = 2)
    context = {
        'users': users,
        'students' : students,
    }

    return render(request, 'teacher-follow.html', context)


def get_info_student_(request, id_student):
    get_student =  User_ours.objects.filter(id_user_ours = id_student)

    if (len(get_student) > 0):

        data = [{'message' : "Found it", 'first_name_user': item.first_name_user, 'last_name_user': item.last_name_user, 'run_user' : item.run_user, 'alias_user' : item.alias_user, 'grade_user' : item.grade_user, 'point_user' : item.point_user} for item in get_student]

    else:
        data = {'message' : "Not Found"}

    return JsonResponse(data, safe=False)        
    

def delete_student_(request, id_student):
    get_student =  User_ours.objects.get(id_user_ours = id_student)
    get_student.delete()

    return redirect(teacher_follow)