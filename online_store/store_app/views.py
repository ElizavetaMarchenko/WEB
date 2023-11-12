from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import *
from .serializer import *


# Create your views here.


def first_page(request):
    # return HttpResponse("<h3>Hello!</h3>")
    return render(request, 'first_page.html')


def about_us(request):
    return HttpResponse("<h3>about</h3>")


def index(request):
    return render(request, 'index.html')


def test_get(request):
    list_ = []
    for i in range(1, 13):
        my_object = Category.objects.get(category_id=i)
        list_.append(my_object.category_name)

    return HttpResponse(content=list_)


@api_view(['GET'])
def getCategory(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSeller_telephone(request, telephone):
    seller = Seller.objects.filter(seller_telephone=telephone)
    serializer = SellerSerializer(seller, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postSeller(request):
    data = JSONParser().parse(request)
    serializer = SellerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors)


@api_view(['PUT'])
def putCategory(request, pk):
    data = request.data
    category = Category.objects.get(category_id=pk)
    serializer = CategorySerializer(instance=category, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)


@api_view(['DELETE'])
def deleteCategory(request, pk):
    category = Category.objects.get(category_id=pk)
    category.delete()
    return Response('Category Eliminado')
