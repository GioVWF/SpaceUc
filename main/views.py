from django.shortcuts import render
from db_spaceuc.models import User_ours



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