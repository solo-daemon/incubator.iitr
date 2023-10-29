from django.conf import settings
from django.db import models

class Project(models.Model):
    description = models.TextField()
    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    admins= models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    project_report = models.FileField()