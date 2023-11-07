from rest_framework import serializers
from tides.models import User
from django.contrib.auth import get_user_model

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields=['name','enrolment_number','username','email','year','profile_pic_url']