from django.db import models

# Create your models here.
class Server(models.Model):
    host = models.CharField(max_length=40)
    port = models.IntegerField(default=25565, blank=True)
    password = models.CharField(max_length=255)