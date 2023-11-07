from django.urls import path, include
from tides.views import *
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'user',UserViewSet)
router.register(r'project',ProjectViewSet)
router.register(r'job',JobViewSet)
urlpatterns = [
    path('',include(router.urls)),
    path('get_oauth_token/', get_token),
    path('send_token_request/', login_redirect),
    path('logout/', logout_user),
]

