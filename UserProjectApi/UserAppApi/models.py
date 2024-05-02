from django.db import models

from django.contrib.auth.models import AbstractBaseUser,BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self,email,password=None,**extra_fields):

        if not email:
            raise ValueError("email can't empty")
        user=self.model(email=self.normalize_email(email),**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
class CustomUser(AbstractBaseUser):
    name=models.CharField(max_length=50,blank=True,null=True) 
    email=models.EmailField(blank=True,null=True,unique=True)

    objects=UserManager()
     
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=['name']
    
    
