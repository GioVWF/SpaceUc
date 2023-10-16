from django.shortcuts import render
from db_spaceuc.models import Level, Question
from . models import Timer
from django.http import JsonResponse

def level_question(request, level,id):
    question_title = Question.objects.filter(id_question = id)[0].title_question
    question_content = Question.objects.filter(id_question = id)[0].description_question
    lesson_number = Question.objects.filter(id_question = id)[0].number_question
    
    question_context = {
        'level': level,
        'lesson': lesson_number, 
        'title': question_title,
        'content': question_content
    }

    return render(request, 'level-question.html', question_context)

def levels(request, level):
    level_info = Level.objects.all().order_by('name_level')
    questions_info = Question.objects.filter(level_id_level = level_info[level].id_level).order_by('id_question')
    
    level_id = level_info[level].id_level
    first_question_id = questions_info[0].id_question
    second_question_id = questions_info[1].id_question
    third_question_id = questions_info[2].id_question
    
    question_context = {
        'level': level_id,
        'first': first_question_id,
        'second': second_question_id,
        'third': third_question_id
    }

    return render(request, 'levels-page.html', question_context)

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