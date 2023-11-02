from django.shortcuts import render, redirect
from db_spaceuc.models import User_ours,PerIcon,Icon
import requests
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from db_spaceuc.models import Level
from django.db.models import Q

def home(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
    }
    return render(request, 'home.html', context)

def game(request):
    level_info = Level.objects.all().order_by('name_level')
    users = User_ours.objects.all()
    
    level_1 = level_info[0].id_level
    level_2 = level_info[1].id_level
    # level_3 = level_info[2].id_level
    # level_4 = level_info[3].id_level
    # level_5 = level_info[4].id_level
    
    context = {
        'users': users,
        'level_1': level_1,
        'level_2': level_2
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
    teacher = User_ours.objects.filter(user_type = 1)
    context = {
        'users': users,
        'students' : students,
        'teacher' : teacher
    }

    return render(request, 'teacher-follow.html', context)


def get_info_student_(request, id_student):
    get_student =  User_ours.objects.filter(id_user_ours = id_student)
    

    get_student_icon =  User_ours.objects.get(id_user_ours = id_student)
    get_per_icon = PerIcon.objects.filter(user_ours_id_user_ours = get_student_icon)
    
    object1 = get_per_icon[0].icon_id_icon.id_icon
    object2 = get_per_icon[1].icon_id_icon.id_icon
    object3 = get_per_icon[2].icon_id_icon.id_icon

    head_query = Icon.objects.get(id_icon = object1)
    body_query = Icon.objects.get(id_icon = object2)
    background_query = Icon.objects.get(id_icon = object3)

    head_svg = head_query.svg_icon
    body_svg = body_query.svg_icon
    background_svg = background_query.svg_icon

    if (len(get_student) > 0):

        data = {
            'message': "Found it",
            'first_name_user': get_student[0].first_name_user,
            'last_name_user': get_student[0].last_name_user,
            'run_user': get_student[0].run_user,
            'alias_user': get_student[0].alias_user,
            'grade_user': get_student[0].grade_user,
            'point_user': get_student[0].point_user,
            'head_svg' : head_svg,
            'body_svg' : body_svg, 
            'background_svg' : background_svg

        }

    else:
        data = {'message' : "Not Found"}

    return JsonResponse(data, safe=False)        
    

def delete_student_(request, id_student):
    get_student =  User_ours.objects.get(id_user_ours = id_student)
    run = get_student.run_user
    get_user_django = User.objects.get(username = run)

    get_student.delete()
    get_user_django.delete()

    return redirect(teacher_follow)



def searcher_student_(request):
    return redirect(teacher_follow)







