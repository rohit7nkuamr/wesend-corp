"""
Django admin configuration for Products
"""
from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Product, ProductImage


class ProductImageInline(admin.TabularInline):
    """Inline admin for product gallery images"""
    model = ProductImage
    extra = 1
    fields = ['image', 'alt_text', 'order']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'product_count', 'is_active', 'order']
    list_editable = ['is_active', 'order']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    
    def product_count(self, obj):
        return obj.products.count()
    product_count.short_description = 'Products'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'category',
        'image_preview',
        'moq',
        'uom',
        'temperature_badge',
        'is_featured',
        'is_active',
        'updated_at'
    ]
    list_filter = [
        'is_active',
        'is_featured',
        'category',
        'uom',
        'created_at'
    ]
    list_editable = ['is_featured', 'is_active']
    search_fields = ['name', 'description', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ['created_at', 'updated_at', 'image_preview_large']
    inlines = [ProductImageInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': (
                'name',
                'slug',
                'category',
                'description',
                'short_description'
            )
        }),
        ('Imagery', {
            'fields': (
                'primary_image',
                'image_preview_large'
            )
        }),
        ('Specifications', {
            'fields': (
                'uom',
                'weight_volume',
                'moq'
            )
        }),
        ('Cold Chain Requirements', {
            'fields': (
                'storage_temp_min',
                'storage_temp_max'
            ),
            'description': 'Temperature requirements for storage and transport'
        }),
        ('Packaging Details', {
            'fields': (
                'packaging_type',
                'units_per_carton',
                'carton_dimensions',
                'gross_weight'
            )
        }),
        ('Additional Information', {
            'fields': (
                'origin_country',
                'certifications',
                'shelf_life'
            ),
            'classes': ('collapse',)
        }),
        ('Status & Display', {
            'fields': (
                'is_active',
                'is_featured',
                'order'
            )
        }),
        ('Metadata', {
            'fields': (
                'created_at',
                'updated_at'
            ),
            'classes': ('collapse',)
        }),
    )
    
    def image_preview(self, obj):
        """Small thumbnail for list view"""
        if obj.primary_image:
            return format_html(
                '<img src="{}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;" />',
                obj.primary_image.url
            )
        return '-'
    image_preview.short_description = 'Image'
    
    def image_preview_large(self, obj):
        """Large preview for detail view"""
        if obj.primary_image:
            return format_html(
                '<img src="{}" style="max-width: 400px; max-height: 400px; border-radius: 8px;" />',
                obj.primary_image.url
            )
        return '-'
    image_preview_large.short_description = 'Image Preview'
    
    def temperature_badge(self, obj):
        """Display temperature range with color coding"""
        return format_html(
            '<span style="background: #99CCFF; color: #003366; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">'
            '{}°C to {}°C'
            '</span>',
            obj.storage_temp_min,
            obj.storage_temp_max
        )
    temperature_badge.short_description = 'Temperature Range'
    
    actions = ['make_featured', 'remove_featured', 'activate_products', 'deactivate_products']
    
    def make_featured(self, request, queryset):
        updated = queryset.update(is_featured=True)
        self.message_user(request, f'{updated} product(s) marked as featured.')
    make_featured.short_description = 'Mark as featured'
    
    def remove_featured(self, request, queryset):
        updated = queryset.update(is_featured=False)
        self.message_user(request, f'{updated} product(s) removed from featured.')
    remove_featured.short_description = 'Remove from featured'
    
    def activate_products(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f'{updated} product(s) activated.')
    activate_products.short_description = 'Activate selected products'
    
    def deactivate_products(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f'{updated} product(s) deactivated.')
    deactivate_products.short_description = 'Deactivate selected products'


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image_preview', 'order', 'created_at']
    list_filter = ['product__category', 'created_at']
    search_fields = ['product__name', 'alt_text']
    
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" />',
                obj.image.url
            )
        return '-'
    image_preview.short_description = 'Preview'
