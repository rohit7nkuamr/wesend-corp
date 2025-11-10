"""
API Views for Products
"""
from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from .models import Category, Product
from .serializers import (
    CategorySerializer,
    ProductListSerializer,
    ProductDetailSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for product categories
    
    list: Get all active categories
    retrieve: Get a single category by slug
    """
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for products
    
    list: Get all active products with filtering and search
    retrieve: Get a single product by slug with full details
    featured: Get featured products only
    """
    queryset = Product.objects.filter(is_active=True).select_related('category')
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category__slug', 'uom', 'is_featured']
    search_fields = ['name', 'description', 'short_description']
    ordering_fields = ['name', 'moq', 'weight_volume', 'created_at']
    ordering = ['-is_featured', 'order', 'name']
    
    def get_serializer_class(self):
        """Use detailed serializer for single product view"""
        if self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductListSerializer
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured products only"""
        featured_products = self.get_queryset().filter(is_featured=True)
        serializer = self.get_serializer(featured_products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        Advanced search endpoint
        Query params:
        - q: search query
        - category: category slug
        - min_temp: minimum storage temperature
        - max_temp: maximum storage temperature
        """
        queryset = self.get_queryset()
        
        # Text search
        query = request.query_params.get('q', None)
        if query:
            queryset = queryset.filter(
                Q(name__icontains=query) |
                Q(description__icontains=query) |
                Q(short_description__icontains=query)
            )
        
        # Category filter
        category = request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category__slug=category)
        
        # Temperature range filter
        min_temp = request.query_params.get('min_temp', None)
        max_temp = request.query_params.get('max_temp', None)
        if min_temp:
            queryset = queryset.filter(storage_temp_min__gte=min_temp)
        if max_temp:
            queryset = queryset.filter(storage_temp_max__lte=max_temp)
        
        # Paginate results
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
