from django.db import models

class Timer(models.Model):
    time_left = models.IntegerField(default=120)
    time_start = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=20)
