from django.urls import path,include
from authapi import views


urlpatterns = [
    path('', include('djoser.urls')),
    path('',include('djoser.urls.authtoken')),
    path('restricted/',views.restricted,name='restricted')

]
