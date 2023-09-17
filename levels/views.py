from django.shortcuts import render
from . models import Timer
from django.http import JsonResponse

def level_question(request):
    return render(request, 'level-question.html')

def questionTimer(request):
    count = Timer.objects.first()
    if request.method == 'POST':
        count = Timer.objects.first()
        seconds =  120 - count.time_left 
        count.time_left = 120 
        count.save()
        return JsonResponse({'success': True, 'seconds':seconds})
    if count.time_left >= 0:
        count.time_left -=1
        count.save()
    return JsonResponse({'live_counter':count.time_left})