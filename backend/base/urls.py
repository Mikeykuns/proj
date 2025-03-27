from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns =[
    path('games/', views.getGames, name="games"),
    path('game/<str:pk>', views.getGame, name="game"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('users/register/', views.registerUser, name="register"),
]
