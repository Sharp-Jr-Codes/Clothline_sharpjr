from django.urls import path
from sharpApp import views

urlpatterns = [
    path('',views.index,name='index')
]