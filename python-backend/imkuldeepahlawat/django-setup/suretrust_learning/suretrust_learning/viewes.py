from django.http import HttpResponse
from django.shortcuts import render

def salute_guys(request):
    return HttpResponse("Namaste, World!  from Kuldeep")

def salute_guys_test(request):
    return HttpResponse("Hello from the Server")

def html_template_rendering(request):
    return render(request, 'index.html')
def html_template_rendering_css(request):
    return render(request, 'css/index.html')
def html_template_rendering_tailwind(request):
    return render(request, 'tailwindcss/index.html')

def kuldeep_portfolio(request):
    return render(request, 'portfolio/index.html')