from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import check_password

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializer import *

# Create your views here.

def about_us(request):
    return HttpResponse("<h3>about</h3>")

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

@api_view(['GET'])
def getSeller_password(request, password):
    seller = Seller.objects.filter(seller_password=password)
    serializer = SellerSerializer(seller, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSeller(request):
    telephone = request.GET.get('telephone', '')
    password = request.GET.get('password', '')

    # Проверяем наличие продавца по номеру телефона
    seller = Seller.objects.filter(seller_telephone=telephone)

    if not seller.exists():
        return Response({'error': 'Продавец не найден'}, status=status.HTTP_404_NOT_FOUND)

    # Если номер телефона верен, проверяем пароль
    seller_instance = seller.first()
    if check_password(password, seller_instance.seller_password):
        serializer = SellerSerializer(seller_instance)
        return Response(serializer.data)
    else:
        return Response({'error': 'Неверный пароль'}, status=status.HTTP_401_UNAUTHORIZED)



@api_view(['POST'])
def postSeller(request):
    data = JSONParser().parse(request)
    serializer = SellerSerializer(data=data)
    print("POOOOOOOOSSSSTTTTTTTT")
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


@api_view(['GET'])
def getProductsBySellerAndCategory(request, seller_id, category_id):
    try:
        products = Product.objects.filter(seller_id=seller_id, category_id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'Продукты не найдены'}, status=status.HTTP_404_NOT_FOUND)
