from django.shortcuts import render_to_response, get_object_or_404
from django.views.generic import ListView, DetailView
from .models import Post, Category

class blogView(ListView):
    model = Post
    template_name = 'blog.html'
    context_object_name = 'post_list'
    paginate_by = 4


class detailPost(DetailView):
    model = Post
    template_name = 'post.html'

class categoryDetail(ListView):
    template_name = 'tag.html'

