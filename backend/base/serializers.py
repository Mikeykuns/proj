from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField()

    def get_token(self, obj):
        return "example-token"  # Replace with actual JWT token logic

    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + ['token']
