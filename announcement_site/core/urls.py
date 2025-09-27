from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView  # ✅ Import from Django

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="home.html"), name='home'),  # ✅ Home page
    path('announcements/', include('announcements.urls')),  # ✅ Include announcements app
]
