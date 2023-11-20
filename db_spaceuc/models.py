from django.db import models
from django.contrib.auth.models import User

class FollowUp(models.Model):
    id_follow = models.AutoField(primary_key=True)
    name_follow = models.CharField(max_length = 100, null = True)
    last_date_follow = models.DateField()
    follow_up_points = models.IntegerField()

    def __str__(self):

        return self.name_follow
    

class Icon(models.Model):
    id_icon = models.AutoField(primary_key = True)
    name_icon = models.CharField(max_length = 100)
    svg_icon = models.TextField()
    type_icon = models.IntegerField()
    color = models.IntegerField(default = 0)

    def __str__(self):

        return self.name_icon
    

class Level(models.Model):
    id_level = models.AutoField(primary_key=True)
    name_level = models.CharField(max_length=60)
    description_level = models.CharField(max_length=200)
    svg_level = models.TextField(blank=True, null=True, default='')

class TypePage(models.Model):
    id_type_page = models.AutoField(primary_key=True)
    name_type_page = models.CharField(max_length=200)

class User_ours(models.Model):
    id_user_ours = models.AutoField(primary_key=True)
    run_user = models.CharField(max_length=30)
 
    alias_user = models.CharField(max_length = 50, blank = True)

    first_name_user = models.CharField(max_length=200)
    last_name_user = models.CharField(max_length=200)
    
    password_user = models.CharField(max_length=10)
    point_user = models.IntegerField()
    grade_user = models.CharField(max_length=10)
    user_type = models.IntegerField() 
    
    progress_user = models.IntegerField(default=1)

    follow_up_id_follow = models.ForeignKey(FollowUp, on_delete=models.CASCADE)

    user =  models.OneToOneField(User, on_delete=models.CASCADE, null = True) #For designate a user of our table to a user of django table.

    def __str__(self):

        return self.first_name_user

class Page(models.Model):
    id_page = models.AutoField(primary_key=True)
    title_page = models.CharField(max_length=300)
    description_page = models.CharField(max_length=2000)
    img_page = models.BinaryField()
    type_page_id_type_page = models.ForeignKey(TypePage, on_delete=models.CASCADE)

class PerIcon(models.Model):
    id_per_icon = models.AutoField(primary_key=True)
    color_icon = models.IntegerField()
    icon_id_icon = models.ForeignKey(Icon, on_delete=models.CASCADE)
    user_ours_id_user_ours = models.ForeignKey(User_ours, on_delete=models.CASCADE, null=True)

class Podium(models.Model):
    id_podio = models.AutoField(primary_key=True)
    first_place = models.CharField(max_length=50)
    second_place = models.CharField(max_length=50)
    third_place = models.CharField(max_length=50)
    user_ours_id_user_ours = models.ForeignKey(User_ours, on_delete=models.CASCADE, null=True)

class Question(models.Model):
    id_question = models.AutoField(primary_key=True)
    number_question = models.IntegerField(default=0)
    title_question = models.CharField(max_length=200)
    description_question = models.CharField(max_length=400)
    audio_question = models.FileField(blank=True, null=True, upload_to="audio")
    level_id_level = models.ForeignKey(Level, on_delete=models.CASCADE)

class Answer(models.Model):
    id_answer = models.AutoField(primary_key=True)
    title_answer = models.CharField(max_length=50, default='')
    content_answer = models.CharField(max_length=200, default='')
    img_answer = models.ImageField(blank=True, null=True, upload_to="answers")
    option_answer = models.BooleanField(default=False)
    question_id_question = models.ForeignKey(Question, on_delete=models.CASCADE)
