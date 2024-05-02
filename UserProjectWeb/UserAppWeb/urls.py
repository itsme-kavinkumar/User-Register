from django.urls import path
from UserAppWeb import views

urlpatterns=[
    path('',views.Register,name="register-page"), 
    path('create-user/',views.UserCreate,name="createuser"), 
]