from django.shortcuts import render, redirect
from main.views import home
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from db_spaceuc.models import User_ours, FollowUp, Icon, PerIcon
from datetime import datetime
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
#--------------------------------------------------------------------------------------------------------------------------------------

def register_page(request):
    return render(request, 'register-page.html')

def register_student_(request):

    

    name_student_form = request.POST['name_student']
    last_name_form = request.POST['last_name']
    rut_form = request.POST['rut'] #Remmember our user to log in is the RUT of the student
    password_form = rut_form[:4] 
    alias_user_pref = ''
    point_user_pref = 0
    grade_user_pref = '5A'
    user_type_pref = 2
    email_user_pref = ''

    try:

        User.objects.get( username = rut_form )
        print('This user already exist')

    except User.DoesNotExist:
        followUp_student_form = FollowUp.objects.create(name_follow = name_student_form, last_date_follow = datetime.now(), follow_up_points = 0)
        newUserDjango = User.objects.create_user(rut_form, email_user_pref, password_form)
        newUserDjango.first_name = name_student_form
        newUserDjango.last_name = last_name_form
        newUserDjango.is_staff = 0
        newUserDjango.is_superuser = 0

        newUserDjango.save()

        User_ours.objects.create(run_user = rut_form, alias_user = alias_user_pref, first_name_user = name_student_form, last_name_user = last_name_form, password_user = password_form, point_user = point_user_pref, grade_user = grade_user_pref, user_type = user_type_pref, follow_up_id_follow = followUp_student_form, user = newUserDjango)

        

        return redirect(home)

    return redirect(login_page)

   
#--------------------------------------------------------------------------------------------------------------------------------------

def profile_page(request):
    users = User_ours.objects.all()
    context = {
        'users': users,
        
    }
    return render(request, 'profile-page.html',context)

def update_profileStudent_(request):

    id_student_form = request.POST['id_student']
    name_student_form = request.POST['name_student']
    last_name_form = request.POST['last_name'] 
    alias_user_pref = request.POST['username']
    

    get_user_ours = User_ours.objects.get(id_user_ours = id_student_form)

    get_user_ours.first_name_user = name_student_form
    get_user_ours.last_name_user = last_name_form
    get_user_ours.alias_user = alias_user_pref
    get_user_ours.save()

    return redirect(profile_page)


#--------------------------------------------------------------------------------------------------------------------------------------

def custom_profile(request):
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    users = User_ours.objects.all()

    context = {
        'icon' : icon,
        'perIcon': perIcon,
        'users': users,
    }

    return render(request, 'custom-profile.html', context)
    
   
    
    

    
