from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.contrib.auth import login, authenticate, logout
from django.http import HttpResponse, HttpRequest, HttpResponseForbidden
from urllib.request import Request
from django.shortcuts import render
import requests
from django.shortcuts import redirect
from django.core.exceptions import ObjectDoesNotExist
from tides.models import User
from rest_framework.response import Response
from dotenv import load_dotenv
import os

load_dotenv()

CLIENT_ID = os.environ.get('CLIENT_ID')
CLIENT_SECRET = os.environ.get('CLIENT_SECRET')
BACKEND_HOST = os.environ.get('BACKEND_HOST')
FRONTEND_HOST = os.environ.get('FRONTEND_HOST')
def auth(username, name, email, enrolment_number,profile_pic_url):
    try:
        user = User.objects.get(username=username)
        return user

    except User.DoesNotExist:
        User.objects.create(username=username, name=name, email=email,
                            profile_pic_url=profile_pic_url, enrolment_number=enrolment_number)
        user = User.objects.get(username=username)
        return user


def get_user(username):
    try:
        return User.objects.get(username=username)
    except User.DoesNotExist:
        return None


@api_view(('GET',))
@authentication_classes([])
@permission_classes([])
def login_redirect(request):
    SITE = f'https://channeli.in/oauth/authorise/?client_id={CLIENT_ID}&redirect_uri={BACKEND_HOST}get_oauth_token/'
    return redirect(SITE)


@api_view(('GET', 'POST'))
@authentication_classes([])
@permission_classes([])
def get_token(request):
    AUTHORISATION_CODE = request.GET.get('code', '')

    post_data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "grant_type": "authorization_code",
        "redirect_uri": f"{BACKEND_HOST}get_oauth_token/",
        "code": AUTHORISATION_CODE,
    }

    response = requests.post('https://channeli.in/open_auth/token/', post_data)

    ACCESS_TOKEN = response.json().get('access_token', '')
    TOKEN_TYPE = response.json().get('token_type', '')
    REFRESh_TOKEN = response.json().get('refresh_token', '')
    print(ACCESS_TOKEN)
    authorization_data = {
        "Authorization": f"{TOKEN_TYPE} {ACCESS_TOKEN}"
    }

    response = requests.get(
        'https://channeli.in/open_auth/get_user_data/', headers=authorization_data)
    print(response.json())
    is_member = False
    name = response.json()['person']['fullName']
    username = response.json()['username']
    email = response.json()['contactInformation']['instituteWebmailAddress']
    enrolment_number = response.json()['student']['enrolmentNumber']
    profile_pic_url = "https://channeli.in"+response.json()['person']['displayPicture']
    auth(username=username, name=name,email=email, enrolment_number=enrolment_number,profile_pic_url=profile_pic_url)
    return redirect(f'{FRONTEND_HOST}?eno={username}')


@api_view(('GET',))
def logout_user(request):
    if request.user.is_authenticated:
        logout(request)
        return Response("user logged out Successfully")