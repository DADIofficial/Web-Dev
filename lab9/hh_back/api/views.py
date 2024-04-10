from django.shortcuts import render
from api.models import Company, Vacancy
# Create your views here.
from django.http.response import HttpResponse, JsonResponse


def company_list(request):
    companies = Company.objects.all()
    company_json = [p.to_json() for p in companies]
    return JsonResponse(company_json, safe=False)

def company_by_id(request, company_id):
    company = Company.objects.all()
    company_json = [p.to_json() for p in company]
    for company in company_json:
        if(company['id'] == company_id):
            return JsonResponse(company, safe=False)
    return JsonResponse({'Error': 'Company not found'})

def company_id_vacancy(request, company_id):
    try:
        vacancy = Vacancy.objects.filter(company_id=company_id)
        vacancy_json = [p.to_json() for p in vacancy]
        return JsonResponse(vacancy_json, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({'Error': 'Vacancies not found'})
    
def vacancy_list(request):
    vac = Vacancy.objects.all()
    vac_json = [p.to_json() for p in vac]
    return JsonResponse(vac_json, safe=False)

def vacancy_by_id(request, vacancy_id):
    vacancy = Vacancy.objects.all()
    Vacancy_json = [p.to_json() for p in vacancy]
    for vacancy in Vacancy_json:
        if(vacancy['id'] == vacancy_id):
            return JsonResponse(vacancy, safe=False)
    return JsonResponse({'Error': 'Company not found'})

def top_ten_vacancy(request):
    vac_top = Vacancy.objects.order_by('-salary')[:10]
    vac_json = [p.to_json() for p in vac_top]
    return JsonResponse(vac_json, safe=False)