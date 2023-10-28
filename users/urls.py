from django.urls import path
from .views import *
# URLConf module
urlpatterns = [
    # endpoint and a views function.
    path('', login_page, name = 'login_page'),
    path('log_in_', log_in_, name = 'log_in_'),
    path('log_out_', log_out_, name = 'log_out_'),
    path('register_page', register_page, name = 'register_page'),
    path('register_student_', register_student_, name = 'register_student_'),
    path('profile_page', profile_page, name = 'profile_page'),
    path('update_profileStudent_', update_profileStudent_, name = 'update_profileStudent_'),
    path('custom_profile', custom_profile, name = 'custom_profile'),
    path('update_profile_photo_', update_profile_photo_, name = 'update_profile_photo_'),
    path('get_color_head/<int:id>', get_color_head, name = 'get_color_head'),
    path('get_color_body/<int:id>', get_color_body, name = 'get_color_body'),
    path('get_color_background/<int:id>', get_color_background, name = 'get_color_background'),
    
      
]