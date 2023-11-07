from rest_framework import viewsets
from tides.models import Projects
from tides.models import Job
from tides.serializers import JobInfoSerializer
from django.db.models import Q
from rest_framework.response import Response
from tides.models import Projects
class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class=JobInfoSerializer

    def get_queryset(self):
        id = self.request.query_params.get('id')
        searchQuery = self.request.query_params.get('searchQuery')
        projectId = self.request.query_params.get('projectId')
        if(projectId):
            project = Projects.objects.get(id=projectId)
            queryset = Job.objects.filter(project=project)
            return queryset
        elif(id):
            queryset = Job.objects.get(id=id)
            return queryset
        elif(searchQuery):
            queryset = Job.objects.filter(Q(skills_required__icontains=searchQuery) | Q(job_role__icontains=searchQuery))
            return queryset
        return Job.objects.all()
    
    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)
        projectId = data['project']
        project = Projects.objects.get(id=projectId)
        Job.objects.create(job_role=data['job_role'],
                           job_description=data['job_description'],
                           starting_salary=data['starting_salary'],
                           maximum_salary=data['maximum_salary'],
                           skills_required=data["skills_required"],
                            project=project,
                           )
        return Response("Job sucessfully created",status=200)

# @api_view(('GET','POST'))
# @authentication_classes([])
# @permission_classes([])
# def apply_job(request):
#     if(request.method=='post'):
#         projectId = request.data.get["projectId"]

#     return Response("Job sucessfully created",status=200)
