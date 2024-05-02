from django.shortcuts import render
import requests
from django.http import JsonResponse
import json
url="http://127.0.0.1:8000"


def Register(request):
    return render(request,"registerpage.html")


def UserCreate(request):
    try:
        print('---------------mmm-------------------------vv')
        if request.body:

            try:
                datas=json.loads(request.body)
            except json.JSONDecodeError as e:
                return JsonResponse(status=400,safe=False)
            
            name= datas.get("txtName")
            email= datas.get("txtEmail")
            password= datas.get("txtPassword")
            confmPassword= datas.get("txtConfPassword")
            if password == confmPassword:

                data={
                    "name":name,
                    'email':email,
                    'password':password
                }
                print(data)
                datapost=requests.post("{url}/user-register/".format(url=url),data=data)
                if datapost.status_code== 201:

                    print(datapost.json().get("message"))
                    return JsonResponse({"message":"User Created Successfully",'status':datapost.status_code},safe=False)
                
                elif datapost.status_code==400: 

                    return JsonResponse({"message":"Email already exist",'status':datapost.status_code},safe=False)
                else:
                    return JsonResponse({"message":"Something went wrong",'status':datapost.status_code},safe=False)

            else:
                return JsonResponse("something went wrong",safe=False)

    except Exception as e:
        print("-------",str(e),)
        return JsonResponse({"error": "Something went wrong"}, status=500)
   


