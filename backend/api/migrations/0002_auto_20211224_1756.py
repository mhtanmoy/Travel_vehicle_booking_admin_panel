# Generated by Django 3.2.7 on 2021-12-24 11:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customeruser',
            name='customeruser',
        ),
        migrations.RemoveField(
            model_name='driver',
            name='driveruser',
        ),
    ]
