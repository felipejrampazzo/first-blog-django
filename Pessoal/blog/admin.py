from django.contrib import admin
from .models import Category, Post

class AutoSlug(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ["__str__", "created", "modified"]

admin.site.register(Category)
admin.site.register(Post, AutoSlug)