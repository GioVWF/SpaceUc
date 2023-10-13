from django.urls import path
from main.views import * 
# URLConf module
urlpatterns = [
    path('', home, name='home_page'), # endpoint and a views function.
    path('navbar/', navbar ),
    path('resources-page/', resources_page, name = 'resources_page'),
    path('about-page/', about, name='about_page'),
    path('levels-info/', levels_info, name="levels_info"),
    path('podium/', podium, name="podium_page"),
    path('game/', game, name="game_page"),
    path('teacher_follow/', teacher_follow, name="teacher_follow"),
    path('get_info_student_/<int:id_student>', get_info_student_, name="get_info_student_"),
    path('delete_student_/<int:id_student>', delete_student_, name="delete_student_"),
]