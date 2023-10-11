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
        
        get_default_head = Icon.objects.get(id_icon = 1)
        get_default_body = Icon.objects.get(id_icon = 2)
        get_default_backgraund = Icon.objects.get(id_icon = 3)
        get_new_user = User_ours.objects.get(run_user = rut_form)

        PerIcon.objects.create(color_icon = 0, icon_id_icon = get_default_head , user_ours_id_user_ours = get_new_user )
        PerIcon.objects.create(color_icon = 0, icon_id_icon = get_default_body , user_ours_id_user_ours = get_new_user )
        PerIcon.objects.create(color_icon = 0, icon_id_icon = get_default_backgraund , user_ours_id_user_ours = get_new_user )
        

        return redirect(home)

    return redirect(login_page)

   
#--------------------------------------------------------------------------------------------------------------------------------------

def profile_page(request):
    icon = Icon.objects.all()
    perIcon = PerIcon.objects.all()
    users = User_ours.objects.all()
    
    context = {
        'icon' : icon,
        'perIcon': perIcon,
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

def update_profile_photo_(request):

    head_icon_initial = request.POST['head_inital']
    body_icon_initial = request.POST['body_initial']
    backgraund_icon_initial = request.POST['backgraund_initial']

    head_icon_form = request.POST['head_final_election']
    body_icon_form = request.POST['body_final_election']
    backgraund_icon_form = request.POST['backgraund_final_election']

    icon_head = Icon.objects.get(id_icon = head_icon_initial )
    icon_body = Icon.objects.get(id_icon = body_icon_initial)
    icon_backgraund = Icon.objects.get(id_icon = backgraund_icon_initial)
    
    
    
    id_user_icon = request.POST['id_user']


    
    

    oldIcon_head = PerIcon.objects.get( user_ours_id_user_ours = id_user_icon, icon_id_icon = icon_head )
    oldIcon_body = PerIcon.objects.get( user_ours_id_user_ours = id_user_icon, icon_id_icon = icon_body )
    oldIcon_backgraund = PerIcon.objects.get( user_ours_id_user_ours = id_user_icon, icon_id_icon = icon_backgraund )
    

    if oldIcon_head.icon_id_icon.type_icon == 0:
        
        oldIcon_head.icon_id_icon = Icon.objects.get(id_icon = head_icon_form)
        oldIcon_head.save()

    if oldIcon_body.icon_id_icon.type_icon == 1:

        oldIcon_body.icon_id_icon = Icon.objects.get(id_icon = body_icon_form)
        oldIcon_body.save()

    if oldIcon_backgraund.icon_id_icon.type_icon == 2:

        oldIcon_backgraund.icon_id_icon = Icon.objects.get(id_icon = backgraund_icon_form)
        oldIcon_backgraund.save()
    
        
        
        
    
    
    


    return redirect(custom_profile)
   
    
    

    
