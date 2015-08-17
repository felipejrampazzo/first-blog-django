from django.conf.urls import url
from Pessoal.blog.views import blogView, detailPost, categoryPage

urlpatterns = [
    url(r'^$', blogView.as_view(), name="blog",),
    url(r'(?P<slug>\S+)$', detailPost.as_view()),
    url(r'tag/(?P<category>\S+)$', categoryPage.as_view(), name="categoryPage"),
]