from django.shortcuts import render
from django.http import JsonResponse
from base.games import games
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from base.serializers import UserSerializer, UserSerializerWithToken


@api_view(['GET'])
def getGames(request):
        games = None
        return Response(games)

@api_view(['GET'])
def getGame(request, pk):
        games = None
        for i in games:
            if i['_id'] == pk:
                games = i
                break 
        return Response(Game)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
        def validate(self,attrs):
                data = super().validate(attrs)

                serializer = UserSerializerWithToken(self.user).data

                for k,v in serializer.items():
                        data[k] = v

                return data                

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'username', 'email', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = User.objects.create_user(
        username=data.get('username', ''),
        email=data.get('email', ''),
        password=data.get('password', ''),
        first_name=data.get('first_name', ''),
        last_name=data.get('last_name', '')
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    


