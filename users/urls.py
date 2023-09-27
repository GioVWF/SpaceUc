from django.urls import path
from .views import login_page, log_in_, log_out_, register_page, register_student_, profile_page,update_profileStudent_
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
      
]