from django.db import models
from django.shortcuts import render
from random import randrange
import math

# Create your models here.
class Ingatlan(models.Model):
    tipus = models.CharField(max_length=30)
    méret = models.CharField(max_length=30)
    cím = models.CharField(max_length=50)
    ár = models.CharField(max_length=30)
    árm2 = models.CharField(max_length=30)
    szoba = models.CharField(max_length=30)
    erkély = models.CharField(max_length=30)
    elérhetőség = models.CharField(max_length=30)
    kép = models.ImageField(upload_to='pics')
    

    class Meta:
        verbose_name = ("ingatlan")
        verbose_name_plural = ("ingatlanok")

    def __str__(self):
        return self.cím

    def feladas(post):
        print("POST request érkezet!!! :)")
        teljesár = 0
        if (post['ar1'] == "0"):
            teljesár = f"{post['ar2']} Ezer"
        if (post['ar2'] == "0"):
            teljesár = f"{post['ar1']} Millió "
        if (post['ar1'] != "0" and post['ar2'] != "0"):
            teljesár = f"{post['ar1']} Millió {post['ar2']} Ezer"
        if (post['tipus'] == "" or post['meret'] == "" or post['iszam'] =="" or post['telep']=="" or post['hazszam'] =="" or post['szoba'] == "" or post['erkely'] =="" or post['eleradat']=="" or post['kep']==""):
            print("Sikertelen kísérlet")
            return False
        ár2 = (int(post['ar1']) * 1000000 + int(post['ar2'])*1000 )/ int(post['meret'])
        Ingatlan.objects.create(tipus = post['tipus'], méret =post['meret'], cím = f"{post['iszam']} {post['telep']}, {post['utca']} {post['hazszam']}", ár = teljesár, árm2 =  ár2, szoba=post['szoba'],erkély=post['erkely'], elérhetőség=post['eleradat'], kép =f"pics/{post['kep']}")
        return True

    
