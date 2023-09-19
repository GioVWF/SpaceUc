from django.urls import path
from .views import login_page, log_in_, log_out_
# URLConf module
urlpatterns = [
    # endpoint and a views function.
    path('', login_page, name = 'login_page'),
    path('log_in_', log_in_, name = 'log_in_'),
    path('log_out_', log_out_, name = 'log_out_'),
  
      
]