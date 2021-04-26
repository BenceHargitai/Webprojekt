from django.shortcuts import render
from .models import Ingatlan
from django.shortcuts import redirect

# Create your views here.
def home_view(request, *args, **kwargs):
    kontextus = Ingatlan.objects.all()
    return render(request, "page.html", {'kontextus' : kontextus})

def felado_view(request, *args, **kwargs):
    if request.method =="POST":
        if (Ingatlan.feladas(request.POST) == True):
            kontextus = {}
            print("asd")
            response = redirect('/')
            return response
    kontextus = {}
    return render(request, "felado.html", kontextus)