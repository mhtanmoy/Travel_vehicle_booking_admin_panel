from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.fields import DateField
from django.utils.timezone import now



class Driver(models.Model):
    driveruser = models.ForeignKey(User, related_name='driver', on_delete=models.CASCADE)
    driver_id = models.AutoField(primary_key=True)
    driver_name=models.CharField(max_length=150)
    mobile_no=models.CharField(max_length=20)
    address=models.CharField(max_length=200, null=True)
    km_driven=models.CharField(max_length=50, null=True)
    choice=(('UNDER VARIFICATION','UNDER VARIFICATION'),('ACTIVE','ACTIVE'),('OFFLINE','OFFLINE'),('ON A RIDE','ON A RIDE'))
    status=models.CharField(max_length=50, choices=choice, default='UNDER VARIFICATION', null=True) 

    def unid(self):
        return f'{self.driver_id}'

    
    def __str__(self):
        return self.driver_name


class CustomerUser(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customeruser = models.ForeignKey(User, related_name='customer', on_delete=models.CASCADE)
    user_name = models.CharField(max_length=150)
    mobile_no = models.CharField(max_length=25)
    wallet_amount = models.CharField(max_length=10, null=True)
    email_id = models.EmailField(max_length=60, null=True, blank=True)
    #User_Id = models.CharField(max_length=10,unique=True)

    def User_Id(self):
        
        return f'{self.id}'

    def __str__(self):
        return self.user_name




class BrandModel(models.Model):
    modelname=models.CharField(max_length=50)
    brand_name=models.CharField(max_length=50)

    def __str__(self):
        return self.modelname


class Vehicle(models.Model):
    vehicle_id = models.AutoField(primary_key=True)
    brand=models.CharField(max_length=150)
    model=models.CharField(max_length=150)
    fare_per_km=models.PositiveIntegerField()
    air_conditioned=models.BooleanField()
    luggage_capacity=models.PositiveIntegerField()
    number_of_seat=models.PositiveIntegerField()

    def __str__(self):
        return self.brand

class BookingHistory(models.Model):
    booking_history_id = models.AutoField(primary_key=True)
    booking_Date=models.DateField()
    choice=(('Round trip','Round trip'),('One way','One way'),('Local','Local'))
    trip_type=models.CharField(max_length=50, choices=choice, default='', null=True) 
    pickup_date_time=models.DateTimeField(null=True, blank=True)
    drop_date=models.DateField(null=True, blank=True)
    km_travelled=models.CharField(max_length=50)
    pickup_point=models.CharField(max_length=150)
    drop_point=models.CharField(max_length=150)
    booked_by_user=models.CharField(max_length=20)
    assigned_driver=models.CharField(max_length=20)
    booked_vehicle=models.CharField(max_length=150)

    def __str__(self):
        return self.booked_by_user






class BookingDetails(models.Model):
    booking_id = models.AutoField(primary_key=True)
    choice=(('Round trip','Round trip'),('One way','One way'),('Local','Local'))
    trip_type=models.CharField(max_length=50, choices=choice, default='', null=True) 
    area=models.CharField(max_length=150)
    Pickup_date_time=models.DateTimeField()
    drop_point=models.CharField(max_length=150)
    drop_date=models.DateField()
    selected_car=models.CharField(max_length=150)
    name = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=25)
    approx_km_travelling=models.CharField(max_length=50)
    fare=models.CharField(max_length=50)
    assign_driver=models.ForeignKey(Driver, on_delete=models.CASCADE, null=True, blank=True)
    reject= models.BooleanField(default=False)

    def __str__(self):
        return self.trip_type



        

class Contact(models.Model):
    phone=models.CharField(max_length=30, null=True, blank=True)
    email=models.EmailField(max_length=60, null=True, blank=True)

    def __str__(self):
        return self.email