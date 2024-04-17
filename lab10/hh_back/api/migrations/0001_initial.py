# Generated by Django 4.2.11 on 2024-04-17 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(default='')),
                ('city', models.CharField(max_length=255)),
                ('address', models.TextField(default='')),
            ],
            options={
                'verbose_name': 'Company',
                'verbose_name_plural': 'Company',
            },
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(default='')),
                ('salary', models.FloatField(max_length=255)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.company')),
            ],
            options={
                'verbose_name': 'Vacancy',
                'verbose_name_plural': 'Vacancy',
            },
        ),
    ]
