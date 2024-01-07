from django.urls import path
from . import views

urlpatterns = [
    path('getCategory/', views.getCategory),
    path('get_tel/<str:telephone>/<str:password>', views.getSeller_log),
    path('post/', views.postSeller),
    path('post_product/', views.postProduct),
    path('getProduct/', views.getProduct),
    path('get_prod_category/<int:pk>/', views.getProduct_category),
    path('get_seller_name/<int:seller_id>', views.get_seller_name_by_id),
    path('get_category_name/<int:category_id>', views.get_category_name_by_id),
    path('get_product_details/<int:product_id>',views.get_product_details),
    path('product/get_seller_details/<int:seller_id>', views.get_seller_details),
    path('delete_product/<int:pk>', views.deleteProduct),
    path('getProduct/<int:pk>/', views.getProduct_by_seller_id),
]
