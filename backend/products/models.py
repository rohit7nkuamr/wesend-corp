"""
Product models for Westend Corporation B2B Platform
"""
from django.db import models
from django.utils.text import slugify
from django.core.validators import MinValueValidator


class Category(models.Model):
    """Product categories for organization"""
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='categories/', blank=True, null=True)
    order = models.IntegerField(default=0, help_text="Display order")
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['order', 'name']
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name


class Product(models.Model):
    """Main product model with cold chain specifications"""
    
    # Unit of Measure choices
    UOM_CHOICES = [
        ('kg', 'Kilogram'),
        ('lbs', 'Pounds'),
        ('pieces', 'Pieces'),
        ('carton', 'Carton'),
        ('box', 'Box'),
    ]
    
    # Basic Information
    name = models.CharField(max_length=255, db_index=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products'
    )
    description = models.TextField(help_text="Detailed product description")
    short_description = models.CharField(
        max_length=500,
        blank=True,
        help_text="Brief description for listings"
    )
    
    # Imagery
    primary_image = models.ImageField(
        upload_to='products/',
        help_text="Main product image (high resolution recommended)"
    )
    
    # Specifications
    uom = models.CharField(
        max_length=20,
        choices=UOM_CHOICES,
        default='kg',
        verbose_name="Unit of Measure"
    )
    weight_volume = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        help_text="Weight or volume per unit"
    )
    moq = models.IntegerField(
        validators=[MinValueValidator(1)],
        verbose_name="Minimum Order Quantity",
        help_text="Minimum quantity required for order"
    )
    
    # Cold Chain Requirements
    storage_temp_min = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=-40.00,
        verbose_name="Min Storage Temperature (°C)",
        help_text="Minimum storage temperature in Celsius"
    )
    storage_temp_max = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=-18.00,
        verbose_name="Max Storage Temperature (°C)",
        help_text="Maximum storage temperature in Celsius"
    )
    
    # Packaging Details
    packaging_type = models.CharField(
        max_length=100,
        help_text="e.g., Vacuum-sealed, IQF, Bulk"
    )
    units_per_carton = models.IntegerField(
        validators=[MinValueValidator(1)],
        help_text="Number of units per carton"
    )
    carton_dimensions = models.CharField(
        max_length=100,
        blank=True,
        help_text="e.g., 40cm x 30cm x 20cm"
    )
    gross_weight = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        blank=True,
        null=True,
        help_text="Gross weight per carton (kg)"
    )
    
    # Additional Information
    origin_country = models.CharField(max_length=100, blank=True)
    certifications = models.TextField(
        blank=True,
        help_text="e.g., HACCP, ISO, Halal, Organic"
    )
    shelf_life = models.CharField(
        max_length=100,
        blank=True,
        help_text="e.g., 24 months from production"
    )
    
    # Status and Metadata
    is_active = models.BooleanField(default=True, db_index=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0, help_text="Display order")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-is_featured', 'order', 'name']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['is_active', 'is_featured']),
        ]
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name
    
    @property
    def temperature_range(self):
        """Return formatted temperature range"""
        return f"{self.storage_temp_min}°C to {self.storage_temp_max}°C"


class ProductImage(models.Model):
    """Additional product images for gallery"""
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='gallery_images'
    )
    image = models.ImageField(upload_to='products/gallery/')
    alt_text = models.CharField(max_length=255, blank=True)
    order = models.IntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', 'created_at']
    
    def __str__(self):
        return f"{self.product.name} - Image {self.order}"
