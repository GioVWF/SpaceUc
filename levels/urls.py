from django.urls import path
from . import views 
# URLConf module
urlpatterns = [
    path('level_question/', views.level_question), # endpoint and a views function.
    path('get_questionTimer', views.questionTimer, name="get_timer")
]