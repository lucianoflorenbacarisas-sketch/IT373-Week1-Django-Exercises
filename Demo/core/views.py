from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def hello(request):
    return HttpResponse("Hello, EVSU!")
def home(request):
    return render(request, "home.html", {"title": "Home"})
def about(request):
    context = {
        "title": "About",
        "name": "Bacarisas, Luciano Floren N.",        
        "student_id": "2023-12578"   
    }
    return render(request, "about.html", context)


