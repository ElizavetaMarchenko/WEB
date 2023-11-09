from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def first_page(request):
    # return HttpResponse("<h3>Hello!</h3>")
    return render(request, 'first_page.html')


def about_us(request):
    return HttpResponse("<h3>about</h3>")


def index(request):
    return render(request, 'index.html')
