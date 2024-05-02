from rest_framework import serializers
from UserAppApi.models import* 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['name','email','password']

    def create(self,validated_data):
        name= validated_data.get('name')
        email= validated_data.get('email')
        password= validated_data.get('password')

        if not CustomUser.objects.filter(email=email).exists():

            user=CustomUser.objects.create_user(password=password,name=name,email=email)
            return user

        else:
            raise serializers.ValidationError("Email Already Exist")

             

