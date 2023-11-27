from django.shortcuts import render, get_object_or_404, redirect
from db_spaceuc.models import Level, Question, Answer, User_ours, FollowUp
from . models import Timer
from django.http import JsonResponse
from django.contrib.auth.models import User
import random
from datetime import datetime
from django.contrib.auth.decorators import login_required

@login_required(login_url='/users/')
def level_question(request, level,id):
    if request.user.is_authenticated:
        user_ours = User_ours.objects.get(user=request.user)
        
    question = get_object_or_404(Question, id_question=id)

    question_title = question.title_question
    question_content = question.description_question
    question_audio = question.audio_question.url
    lesson_number = question.number_question
    answer_info = Answer.objects.filter(question_id_question=id)

    progress = user_ours.progress_user   
    
    limitators = {
        1: {1: 1, 2: 2,3: 3  },
        2: {1: 4,2: 5,3: 6},
        3: {1: 7,2: 8,3: 9},
        4: {1: 10,2: 11,3: 12},
        5: {1: 13,2: 14,3: 15}
    }
    
    if level in limitators and lesson_number in limitators[level]:
        limitator = limitators[level][lesson_number]
    
    anwser_urls = [answer.img_answer.url for answer in answer_info if answer.img_answer]
    random.shuffle(anwser_urls)  
    
    anwser_1 = anwser_urls[0]
    anwser_2 = anwser_urls[1]
    anwser_3 = anwser_urls[2]
    
    for i in answer_info:
        if anwser_urls[0] == i.img_answer.url:
            check_1 = i.option_answer
            content_anwser_1 = i.content_answer
        if anwser_urls[1] == i.img_answer.url:
            check_2 = i.option_answer
            content_anwser_2 = i.content_answer
        if anwser_urls[2] == i.img_answer.url:
            check_3 = i.option_answer
            content_anwser_3 = i.content_answer
    
    
    
    date = datetime.now()
    
    number_day_spanish = date.weekday()
    days_spanish = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    
    day_name_spanish = days_spanish[number_day_spanish]
    
    day = day_name_spanish
    date_format = date.strftime("%d/%m")
    
    question_context = {
        'level': level,
        'lesson': lesson_number, 
        'title': question_title,
        'content': question_content,
        'audio': question_audio,
        'anwser_1': anwser_1,
        'anwser_2': anwser_2,
        'anwser_3': anwser_3,
        'check_1': check_1,
        'check_2':check_2,
        'check_3': check_3,
        'content_anwser_1': content_anwser_1,
        'content_anwser_2': content_anwser_2,
        'content_anwser_3': content_anwser_3,
        'progress': progress,
        'limitator': limitator,
        'next': limitator+1,
        'date': date_format,
        'day': day,
    }

    redirect_limit = {
        1: { 1: 0, 2: 1,3: 2  },
        2: { 1: 3, 2: 4,3: 5  },
        3: { 1: 6, 2: 7,3: 8  },
        4: { 1: 9, 2: 10,3: 11  },
        5: { 1: 12, 2: 13,3: 14  }
    }
    
    if progress < redirect_limit[level][lesson_number]:
        return redirect('game_page')
    return render(request, 'level-question.html', question_context)

@login_required(login_url='/users/')
def levels(request, level):
    if request.user.is_authenticated:
        user_ours = User_ours.objects.get(user=request.user)
        
    level_getter =  'Nivel ' + str(level)
        
    progress = user_ours.progress_user    
    level_info = Level.objects.filter(name_level = level_getter)
    questions_info = Question.objects.filter(level_id_level = level_info[0].id_level)
    
    level_svg = level_info[0].svg_level
    level_name = level_info[0].name_level
    first_question_id = questions_info[0].id_question
    second_question_id = questions_info[1].id_question
    third_question_id = questions_info[2].id_question
    
    limitator = {
        1: { 1: 0, 2: 1,3: 2  },
        2: { 1: 3, 2: 4,3: 5  },
        3: { 1: 6, 2: 7,3: 8  },
        4: { 1: 9, 2: 10,3: 11  },
        5: { 1: 12, 2: 13,3: 14  }
    }
    
    if level in limitator:
        limit = limitator[level]
    
    question_context = {
        'level': level,
        'subtitle': level_name,
        'first': first_question_id,
        'second': second_question_id,
        'third': third_question_id,
        'svg': level_svg,
        'progress': progress,
        'limit': limit
    }

    if progress < limit[1]:
        return redirect('game_page')
    
    return render(request, 'levels-page.html', question_context)

def questionTimer(request):
    if request.user.is_authenticated:
        user_ours = User_ours.objects.get(user=request.user)
    count = Timer.objects.first()
    
    if request.method == 'POST':
        pointsToAdd = int(request.POST.get('points'))
        progressToSet = int(request.POST.get('progress'))
        
        follow_up = FollowUp.objects.get(id_follow = user_ours.follow_up_id_follow.id_follow)
        
        follow_up.last_date_follow = datetime.now()
        
        user_ours.point_user += pointsToAdd
        user_ours.progress_user = progressToSet
        user_ours.save()
        follow_up.save()
        return JsonResponse({'success': True})
    
    minutes = count.time_left // 60;
    seconds = count.time_left % 60;
    
    crono = f"{minutes}:{seconds:02d}"
    return JsonResponse({'live_counter':count.time_left, 'cronometer':crono})