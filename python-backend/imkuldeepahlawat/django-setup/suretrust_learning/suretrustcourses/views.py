from django.shortcuts import render

# Create your views here.
def suretrust_courses(request):
    return render(request, 'suretrustcourses/courses.html')

def portfolio(request):
    return render(request, 'suretrustcourses/portfolio.html')