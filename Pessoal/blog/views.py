from django.views.generic import ListView, DetailView
from .models import Post, Category
from django.shortcuts import render_to_response, get_object_or_404

class blogView(ListView):
    model = Post
    template_name = 'blog.html'
    context_object_name = 'post_list'
    paginate_by = 4

class detailPost(DetailView):
    model = Post
    template_name = 'post.html'

def view_category(request, name):
    category = get_object_or_404(Category, name=name)
    return render_to_response('tag.html', {
        'category': category,
        'posts': Post.objects.filter(category=category)
    })