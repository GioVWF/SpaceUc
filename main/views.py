from django.shortcuts import render, redirect
from db_spaceuc.models import User_ours,PerIcon,Icon,FollowUp
import requests
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from db_spaceuc.models import Level
from django.db.models import Q
from django.contrib import messages
from django.template import RequestContext
from django.contrib.auth.decorators import login_required

def home(request):
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    context = {
        'users': users,
        'icon' : icon,
        'perIcon' : perIcon,
        
    }
    return render(request, 'main/Home.html', context)

@login_required(login_url='/users/')
def game(request):
    if request.user.is_authenticated:
        user_ours = User_ours.objects.get(user=request.user)
        
    level_info = Level.objects.all().order_by('name_level')
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    progress = user_ours.progress_user
    
   
    
    level_1 = (level_info[0].name_level)[-1:] 
    level_2 = (level_info[1].name_level)[-1:] 
    level_3 = (level_info[2].name_level)[-1:] 
    level_4 = (level_info[3].name_level)[-1:] 
    level_5 = (level_info[4].name_level)[-1:] 
    
    
    context = {
        'users': users,
        'icon' : icon,
        'perIcon' : perIcon,
        'level_1': int(level_1),
        'level_2': int(level_2),
        'level_3': int(level_3),
        'level_4': int(level_4),
        'level_5': int(level_5),
        'progress': progress
    }
    
    return render(request, 'game.html', context)

def navbar(request):
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    context = {
        'users': users,
        'icon' : icon,
        'perIcon' : perIcon,
        
    }
    return render(request, 'base.html', context)


def about(request):
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    context = {
        'users': users,
        'icon' : icon,
        'perIcon' : perIcon,
        
    }
    return render(request, 'about.html', context)

def levels_info(request):
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    level_description = Level.objects.all().order_by('name_level')
    
    context = {
        'users': users,
        'icon' : icon,
        'perIcon' : perIcon,
        'info_1' : level_description[0].description_level,
        'info_2' : level_description[1].description_level,
        'info_3' : level_description[2].description_level,
        'info_4' : level_description[3].description_level,
        'info_5' : level_description[4].description_level
    }
    
    return render(request, 'levels-info.html', context)
#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

def resources_page(request):
    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    url = 'https://api.nasa.gov/planetary/apod?api_key=qE5NtN0FYG428PJE1nu4ygkCkPEQMRHV0F33lwOp'
    
    try:
        response = requests.get(url)
        response.raise_for_status() 
        data = response.json()
    except requests.exceptions.RequestException:
    
        
        data = None

    context = {
        'users': users,
        'data' : data,
        'icon' : icon,
        'perIcon' : perIcon,
        
    }
    return render(request, 'resources-page.html', context)
#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

@login_required(login_url='/users/')
def podium(request):

    users = User_ours.objects.all()
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
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
        'icon' : icon,
        'perIcon' : perIcon,
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
    follow = get_student.follow_up_id_follow.id_follow
    get_user_django = User.objects.get(username = run)
    get_follow = FollowUp.objects.get(id_follow = follow)

    get_student.delete()
    get_user_django.delete()
    get_follow.delete()
    messages.success(request, "Estudiante eliminado")
    return redirect(teacher_follow)










