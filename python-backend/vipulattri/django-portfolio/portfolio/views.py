from django.shortcuts import render, get_object_or_404, redirect
from .models import Project, Skill, About
from .models import Contact

def home(request):
    about = About.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()[:3]  # Show top 3 projects
    return render(request, 'portfolio/home.html', {
        'about': about,
        'skills': skills,
        'projects': projects,
    })

def project_list(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/project_list.html', {'projects': projects})

def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'portfolio/project_detail.html', {'project': project})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        Contact.objects.create(name=name, email=email, message=message)
        return redirect('home')
    return render(request, 'portfolio/contact.html')
