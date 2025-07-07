from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import student
# Create your views here.
def suretrust_courses(request):
    return render(request, 'suretrustcourses/courses.html')

@login_required(login_url='/')
def portfolio(request):
    return render(request, 'suretrustcourses/portfolio.html')

def students(request):
    students = student.objects.all()
    return {'students': students}