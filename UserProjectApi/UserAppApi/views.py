from django.shortcuts import render
from UserAppApi.models import*
from UserAppApi.serializers import*
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
import traceback

class UserCreateView(APIView):
    def post(self,request):
        try:
            serializer= UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message':"User Registered Successfully"},status=status.HTTP_201_CREATED)
            return Response({'message':serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error':e},status=status.HTTP_500_INTERNAL_SERVER_ERROR)