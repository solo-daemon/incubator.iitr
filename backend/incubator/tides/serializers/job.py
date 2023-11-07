from rest_framework import serializers
from tides.models import Job
class JobInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Job
        fields=["id","job_role","job_description","skills_required","starting_salary","maximum_salary","applicant"]