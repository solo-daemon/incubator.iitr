from rest_framework import serializers
from tides.models import Projects
from django.contrib.auth import get_user_model

class ProjectInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields=["id","project_name","project_description","project_report"]