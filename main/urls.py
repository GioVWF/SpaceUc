from django.urls import path
from main.views import * 
# URLConf module
urlpatterns = [
    path('', home), # endpoint and a views function.
    path('navbar/', navbar ),
    path('resources-page/', resources_page, name = 'resources_page'),
   
]