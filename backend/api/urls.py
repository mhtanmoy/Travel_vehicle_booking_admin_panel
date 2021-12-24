from django.urls import path
from api.views import user_views as u_views

urlpatterns = [
    path('users/login', u_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', u_views.registerUser, name="register"),
    path('users', u_views.getUsers, name="users"),
    path('users/profile', u_views.getUserProfile, name="user-profile"),
    path('users/update', u_views.updateUserProfile, name="user-profile-update"),
    path('users/<str:pk>', u_views.getUserById, name='user'),
    path('users/update/<str:pk>', u_views.updateUser, name='user-update'),
    path('users/delete/<str:pk>', u_views.deleteUser, name='user-delete'),
]