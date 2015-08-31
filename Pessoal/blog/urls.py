from django.conf.urls import url
from Pessoal.blog.views import blogView, detailPost

urlpatterns = [
    url(r'^$', blogView.as_view(), name="blog",),
    url(r'^tag/(?P<name>\S+)$', "Pessoal.blog.views.view_category", name="view_category"),
    url(r'^(?P<slug>\S+)$', detailPost.as_view()),
]