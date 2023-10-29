from django.db import models
from tides.models import Project

class Job(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE
    )