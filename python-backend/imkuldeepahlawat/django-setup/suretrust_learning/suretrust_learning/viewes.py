from django.http import HttpResponse

def salute_guys(request):
    return HttpResponse("Namaste, World!  from Kuldeep")

def salute_guys_test(request):
    return HttpResponse("Hello from the Server")

