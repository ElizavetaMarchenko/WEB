from django.urls import path
from . import views

urlpatterns = [
    path('getCategory/', views.getCategory),
    path('get_tel/<str:telephone>/', views.getSeller_telephone),
    path('post/', views.postSeller),
    path('post_product/', views.postProduct),
    # path('put/<int:pk>', views.putCategory),
    # path('delete/<int:pk>', views.deleteCategory),
    path('get_product/', views.getProduct),
    path('get_prod_category/<int:pk>/', views.getProduct_category),
    path('get_seller_name/<int:seller_id>', views.get_seller_name_by_id),
]
