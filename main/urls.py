from django.urls import path
from . import views 
# URLConf module
urlpatterns = [
    path('', views.home) # endpoint and a views function.
]