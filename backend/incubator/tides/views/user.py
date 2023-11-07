from rest_framework import viewsets
from tides.models import User
from tides.serializers import UserInfoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset= User.objects.all()
    serializer_class= UserInfoSerializer

    def get_queryset(self):
        eno = self.request.query_params.get('eno')
        if(eno):
            queryset= User.objects.filter(username=eno)
            return queryset
        return User.objects.all()

