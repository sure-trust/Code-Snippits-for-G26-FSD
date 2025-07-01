from django.http import HttpResponse
from django.shortcuts import render
def front_page(request):
     return render(request, './st/index.html')
def html_page_rendering(request):
     return render(request, './portfolio/index.html')
