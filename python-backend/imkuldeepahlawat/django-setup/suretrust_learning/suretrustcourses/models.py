from django.db import models

# Create your models here.
class Course(models.Model):
    SURETRUST_COURSE_CHOICES = [
        ('SURETRUST_101', 'SURETRUST 101'),
        ('SURETRUST_102', 'SURETRUST 102'),
        ('SURETRUST_103', 'SURETRUST 103'),
    ]
    suretrust_course = models.CharField(max_length=13, choices=SURETRUST_COURSE_CHOICES)
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class student(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='students', null=True, blank=True)

    def __str__(self):
        return self.name