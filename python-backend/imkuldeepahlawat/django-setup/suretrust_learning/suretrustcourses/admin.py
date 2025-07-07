from django.contrib import admin
from .models import Course, student

class studentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'course')
    list_filter = ('course',)
    search_fields = ('name', 'email', 'phone')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('suretrust_course', 'title', 'description')
    list_filter = ('suretrust_course',)
    search_fields = ('title', 'description')

# Register your models here.
admin.site.register(Course, CourseAdmin)
admin.site.register(student, studentAdmin)