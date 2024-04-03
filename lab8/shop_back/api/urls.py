
from django.urls import path, re_path
from api import views


urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id_path>/', views.category_detail),
    path('categories/<int:category_id_path>/products/', views.products_by_category)
]
