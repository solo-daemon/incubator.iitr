from django.db import models
from .projects import Projects
from .users import User
from django.core.validators import MaxValueValidator, MinValueValidator
class Job(models.Model):
    project = models.ForeignKey(Projects, related_name="jobs",on_delete=models.CASCADE)
    job_role = models.TextField(null=True)
    job_description = models.TextField(null=True)
    skills_required = models.TextField(null=True)
    starting_salary = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    maximum_salary = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    applicant = models.ManyToManyField(User,related_name='jobs',null=True)
    def __str__(self):
        return f"{self.job_role}"