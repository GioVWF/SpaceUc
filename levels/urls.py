from django.urls import path
from . import views 
# URLConf module
urlpatterns = [
    path('levels/<int:level>/', views.levels, name="levels"),
    path('level_question/<int:level>/<int:id>/', views.level_question, name="question"), 
    path('get_questionTimer', views.questionTimer, name="get_timer")
]