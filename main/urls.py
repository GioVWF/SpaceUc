from django.urls import path
from main.views import * 
# URLConf module
urlpatterns = [
    path('', home, name='home_page'), # endpoint and a views function.
    path('navbar/', navbar ),
    path('resources-page/', resources_page, name = 'resources_page'),
    path('about-page/', about, name='about_page'),
    path('levels-info/', levels_info, name="levels_info"),
    path('podium/', podium, name="podium"),
]