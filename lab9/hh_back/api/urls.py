
from django.urls import path, re_path
from api import views


urlpatterns = [
    path('company/', views.company_list),
    path('company/<int:company_id>/', views.company_by_id),
    path('company/<int:company_id>/vacancy', views.company_id_vacancy),
    path('vacancy/', views.vacancy_list),
    path('vacancy/<int:vacancy_id>/', views.vacancy_by_id),
    path('vacancy/top_ten/', views.top_ten_vacancy),
]
