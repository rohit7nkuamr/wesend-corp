"""
DRF Serializers for Products API
"""
from rest_framework import serializers
from .models import Category, Product, ProductImage


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for product categories"""
    product_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'slug',
            'description',
            'image',
            'product_count',
            'is_active'
        ]
    
    def get_product_count(self, obj):
        return obj.products.filter(is_active=True).count()


class ProductImageSerializer(serializers.ModelSerializer):
    """Serializer for product gallery images"""
    
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'order']


class ProductListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for product listings"""
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    temperature_range = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'category_name',
            'category_slug',
            'short_description',
            'primary_image',
            'uom',
            'weight_volume',
            'moq',
            'storage_temp_min',
            'storage_temp_max',
            'temperature_range',
            'packaging_type',
            'units_per_carton',
            'is_featured',
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for single product view"""
    category = CategorySerializer(read_only=True)
    gallery_images = ProductImageSerializer(many=True, read_only=True)
    temperature_range = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'slug',
            'category',
            'description',
            'short_description',
            'primary_image',
            'gallery_images',
            'uom',
            'weight_volume',
            'moq',
            'storage_temp_min',
            'storage_temp_max',
            'temperature_range',
            'packaging_type',
            'units_per_carton',
            'carton_dimensions',
            'gross_weight',
            'origin_country',
            'certifications',
            'shelf_life',
            'is_featured',
            'created_at',
            'updated_at',
        ]
