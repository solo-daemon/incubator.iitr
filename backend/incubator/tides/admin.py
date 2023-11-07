from django.contrib import admin
from tides.models import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import UserAdmin 
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth import get_user_model
# Register your models here.

admin.register()
admin.site.register(Projects)
admin.site.register(Job)
admin.site.register(User,UserAdmin)


