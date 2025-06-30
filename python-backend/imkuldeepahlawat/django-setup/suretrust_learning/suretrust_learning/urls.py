"""
URL configuration for suretrust_learning project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path
from . import viewes
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def hello_world(request):
    return Response({"message": "Hello, World!"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('salute_guys/', viewes.salute_guys),
    path('salute_guys_test/', viewes.salute_guys_test),
    path('hello_world/', hello_world),
]
