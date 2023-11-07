from rest_framework import viewsets
from tides.models import Projects
from tides.models import User
from tides.serializers import ProjectInfoSerializer
from rest_framework.response import Response
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectInfoSerializer

    def get_queryset(self):
        eno = self.request.query_params.get('eno')
        id = self.request.query_params.get('id')
        if(eno):
            user = User.objects.get(username=eno)
            queryset = Projects.objects.filter(admin=user)
            return queryset
        elif(id):
            queryset = Projects.objects.filter(id=id)
            return queryset
        queryset=Projects.objects.all()
        return queryset
    

        