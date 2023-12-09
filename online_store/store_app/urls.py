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
]
