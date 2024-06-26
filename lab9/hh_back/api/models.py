from django.db import models

# Create your models here.

    

class Company(models.Model):
    name = models.CharField(max_length=255, default='')  # Provide a default value for name
    description = models.TextField(default='')
    city = models.CharField(max_length=255, default='')
    address = models.TextField(default='')

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255, default='')
    description = models.TextField(default='')
    salary = models.FloatField(default=0)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE, default=0)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id.id
        }




