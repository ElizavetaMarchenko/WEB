<<<<<<< HEAD
from django.urls import path
from . import views

urlpatterns = [
    path('about_us', views.about_us),
    path('test', views.test_get),
    path('getCategory/', views.getCategory),
    path('get_tel/<str:telephone>/', views.getSeller_telephone),
    path('post/', views.postSeller),
    path('put/<int:pk>', views.putCategory),
    path('delete/<int:pk>', views.deleteCategory),
    path('getSellers/', views.getSellers),
    path('addProduct/', views.addProduct),
    path('getStatus/', views.getStatus),
    path('get_seller_name/<int:seller_id>', views.get_seller_name_by_id),
]
=======
from django.urls import path
from . import views

urlpatterns = [
    path('getCategory/', views.getCategory),
    path('get_tel/<str:telephone>/', views.getSeller_telephone),
    path('post/', views.postSeller),
    path('post_product/', views.postProduct),
    # path('put/<int:pk>', views.putCategory),
    # path('delete/<int:pk>', views.deleteCategory),
    path('getProduct/', views.getProduct),
    path('get_prod_category/<int:pk>/', views.getProduct_category),
    path('get_seller_name/<int:seller_id>', views.get_seller_name_by_id),
    path('get_category_name/<int:category_id>', views.get_category_name_by_id),
]
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
