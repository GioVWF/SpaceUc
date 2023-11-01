from django.shortcuts import render, get_object_or_404
from db_spaceuc.models import Level, Question, Answer
from . models import Timer
from django.http import JsonResponse
import random

def level_question(request, level,id):
    question = get_object_or_404(Question, id_question=id)

    question_title = question.title_question
    question_content = question.description_question
    lesson_number = question.number_question
    answer_info = Answer.objects.filter(question_id_question=id)

    anwser_urls = [answer.img_answer.url for answer in answer_info if answer.img_answer]
    random.shuffle(anwser_urls)
    
    anwser_1 = anwser_urls[0]
    anwser_2 = anwser_urls[1]
    anwser_3 = anwser_urls[2]
    
    for i in answer_info:
        if anwser_urls[0] == i.img_answer.url:
            check_1 = i.option_answer
        if anwser_urls[1] == i.img_answer.url:
            check_2 = i.option_answer
        if anwser_urls[2] == i.img_answer.url:
            check_3 = i.option_answer
    
    print(anwser_2)
    
    question_context = {
        'level': level,
        'lesson': lesson_number, 
        'title': question_title,
        'content': question_content,
        'anwser_1': anwser_1,
        'anwser_2': anwser_2,
        'anwser_3': anwser_3,
        'check_1': check_1,
        'check_2':check_2,
        'check_3': check_3
    }

    return render(request, 'level-question.html', question_context)

def levels(request, level):
    level_info = Level.objects.filter(id_level = level)
    questions_info = Question.objects.filter(level_id_level = level).order_by('id_question')
    
    level_svg = level_info[0].svg_level
    level_id = level_info[0].id_level
    level_name = level_info[0].name_level
    first_question_id = questions_info[0].id_question
    second_question_id = questions_info[1].id_question
    third_question_id = questions_info[2].id_question
    
    question_context = {
        'level': level_id,
        'subtitle': level_name,
        'first': first_question_id,
        'second': second_question_id,
        'third': third_question_id,
        'svg': level_svg
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