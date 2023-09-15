from django.db import models

class FollowUp(models.Model):
    id_follow = models.AutoField(primary_key=True)
    last_date_follow = models.DateField()
    follow_up_points = models.IntegerField()

class Icon(models.Model):
    id_icon = models.AutoField(primary_key=True)
    name_icon = models.IntegerField()
    svg_icon = models.BinaryField()
    type_icon = models.IntegerField()

class Level(models.Model):
    id_level = models.AutoField(primary_key=True)
    name_level = models.CharField(max_length=60)
    description_level = models.CharField(max_length=200)

class TypePage(models.Model):
    id_type_page = models.AutoField(primary_key=True)
    name_type_page = models.CharField(max_length=200)

class User_ours(models.Model):
    run_user = models.IntegerField(primary_key=True)
    name_user = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username_user = models.CharField(max_length=50)
    password_user = models.CharField(max_length=10)
    point_user = models.IntegerField()
    grade_user = models.CharField(max_length=10)
    user_type = models.IntegerField()
    follow_up_id_follow = models.ForeignKey(FollowUp, on_delete=models.CASCADE)

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
    user_run_user = models.ForeignKey(User_ours, on_delete=models.CASCADE)

class Podium(models.Model):
    id_podio = models.AutoField(primary_key=True)
    first_place = models.CharField(max_length=50)
    second_place = models.CharField(max_length=50)
    third_place = models.CharField(max_length=50)
    user_run_user = models.ForeignKey(User_ours, on_delete=models.CASCADE)

class Question(models.Model):
    id_question = models.AutoField(primary_key=True)
    title_question = models.CharField(max_length=200)
    description_question = models.CharField(max_length=400)
    title_lesson = models.CharField(max_length=200)
    level_id_level = models.ForeignKey(Level, on_delete=models.CASCADE)
    description_lesson = models.CharField(max_length=1000)
    user_run_user = models.ForeignKey(User_ours, on_delete=models.CASCADE)



class Answer(models.Model):
    id_answer = models.AutoField(primary_key=True)
    content_answer = models.CharField(max_length=100)
    option_answer = models.CharField(max_length=1)
    question_id_question = models.ForeignKey(Question, on_delete=models.CASCADE)
    svg_content_answer = models.BinaryField()
    follow_up_id_follow = models.ForeignKey(FollowUp, on_delete=models.CASCADE)
