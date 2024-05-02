from django.urls import path
from UserAppApi import views

urlpatterns=[
    path('user-register/',views.UserCreateView.as_view()),
]

