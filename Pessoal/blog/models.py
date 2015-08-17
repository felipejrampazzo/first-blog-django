from django.db import models

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    categories = models.Manager()

    def __str__(self):
        return self.name

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, blank=False)
    text = models.TextField(blank=False)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    modified = models.DateTimeField(auto_now=True, auto_now_add=False)
    slug = models.SlugField(blank=False, unique=True)
    category = models.ManyToManyField(Category)
    image = models.ImageField(upload_to='img/')
    posts = models.Manager()

    class Meta():
        ordering = ('-created',)

    def __str__(self):
        return self.title
