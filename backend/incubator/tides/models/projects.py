from django.db import models
from .users import User

class Projects(models.Model):
    project_name=models.TextField()
    project_description=models.TextField()
    project_report = models.FileField(null=True)
    admin = models.ForeignKey(User,related_name='projects',on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.project_name}"
