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
