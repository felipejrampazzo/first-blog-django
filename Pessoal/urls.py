from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    url(r'^blog/', include('Pessoal.blog.urls')),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
   }),
]