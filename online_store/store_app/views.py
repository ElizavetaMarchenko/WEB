<<<<<<< HEAD
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import check_password

from rest_framework.response import Response    
from rest_framework.request import Request
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
    
@api_view(['GET'])
def get_seller_name_by_id(request, seller_id):
    try:
        seller_login = Seller.objects.get(seller_id=seller_id)
        serializer = SellerSerializer(seller_login)
        return Response({'seller_login': serializer.data['seller_login']})
    except Seller.DoesNotExist:
        return Response({'error': 'Продавец не был найден'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def getSellers(request):
    sellers = Seller.objects.all()
    serializer = SellerSerializer(sellers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getStatus(request):
    status = Status.objects.all()
    serializer = StatusSerializer(status, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addProduct(request):
    data = request.data
    serializer = ProductSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

=======
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import *


# Create your views here.

@api_view(['GET'])
def getCategory(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_category_name_by_id(request, category_id):
    category = Category.objects.filter(category_id=category_id)
    serializer = CategorySerializer(category,  many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct_category(request, pk):
    product = Product.objects.filter(category_id=pk)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSeller_telephone(request, telephone):
    seller = Seller.objects.filter(seller_telephone=telephone)
    serializer = SellerSerializer(seller, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_seller_name_by_id(request, seller_id):
    seller_login = Seller.objects.filter(seller_id=seller_id)
    serializer = SellerSerializer(seller_login, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postSeller(request):
    data = JSONParser().parse(request)
    serializer = SellerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)
    return JsonResponse(serializer.errors)


@api_view(['POST'])
def postProduct(request):
    data = JSONParser().parse(request)
    serializer = ProductSerializer(data=data)
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
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
