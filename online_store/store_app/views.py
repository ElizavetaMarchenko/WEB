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

@api_view(['GET'])
def get_product_details(request, product_id):
    product = Product.objects.get(product_id=product_id)
    serialazer = ProductSerializer(product)
    return Response(serialazer.data)



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

