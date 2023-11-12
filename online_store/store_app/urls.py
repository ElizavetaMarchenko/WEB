from django.urls import path
from . import views

urlpatterns = [
    path('first', views.first_page),
    path('about_us', views.about_us),
    path('test', views.test_get),
    path('get/', views.getCategory),
    path('post/', views.postSeller),
    path('put/<int:pk>', views.putCategory),
    path('delete/<int:pk>', views.deleteCategory),
]
