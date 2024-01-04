# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Category(models.Model):
    category_id = models.AutoField(primary_key=True, blank=True, null=False)
    category_name = models.TextField()

    class Meta:
        managed = False
        db_table = 'Category'


class Like(models.Model):
    product = models.ForeignKey('Product', models.DO_NOTHING)
    seller = models.ForeignKey('Seller', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Like'


class Product(models.Model):
    product_id = models.AutoField(primary_key=True, blank=True, null=False)
    product_name = models.TextField()
    product_description = models.TextField(blank=True, null=True)
    product_price = models.IntegerField()
    product_image = models.TextField()
    product_comment = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, models.DO_NOTHING)
    seller = models.ForeignKey('Seller', models.DO_NOTHING)
    status = models.ForeignKey('Status', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'Product'


class Seller(models.Model):
    seller_id = models.AutoField(primary_key=True, blank=True, null=False)
    seller_login = models.TextField()
    seller_password = models.TextField()
    seller_telephone = models.TextField(blank=True, null=True)
    seller_name = models.TextField(blank=True, null=True)
    seller_vk = models.TextField(blank=True, null=True)
    seller_telegram = models.TextField(blank=True, null=True)
    seller_insta = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Seller'


class Status(models.Model):
    status_id = models.AutoField(primary_key=True, blank=True, null=False)
    status_name = models.TextField()

    class Meta:
        managed = False
        db_table = 'Status'

