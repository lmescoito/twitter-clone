from rest_framework import serializers
from django import forms

from .models import UserProfile


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = UserProfile
        fields = "__all__"
        
class ProfileForm(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['profile_image']