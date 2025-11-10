"""
Quote and Lead Management models
"""
from django.db import models
from django.core.validators import MinValueValidator
from django.utils.crypto import get_random_string
from products.models import Product


def generate_quote_number():
    """Generate unique quote number"""
    prefix = 'QT'
    random_string = get_random_string(length=8, allowed_chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    return f"{prefix}-{random_string}"


class Quote(models.Model):
    """Main quote/RFQ model"""
    
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('reviewed', 'Reviewed'),
        ('quoted', 'Quote Sent'),
        ('converted', 'Converted to Order'),
        ('declined', 'Declined'),
    ]
    
    # Quote Identification
    quote_number = models.CharField(
        max_length=20,
        unique=True,
        default=generate_quote_number,
        editable=False
    )
    
    # Customer Information
    company_name = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    
    # Additional Details
    message = models.TextField(
        blank=True,
        help_text="Additional message or requirements from customer"
    )
    
    # Quote Status
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending',
        db_index=True
    )
    
    # Internal Notes
    internal_notes = models.TextField(
        blank=True,
        help_text="Internal notes for sales team (not visible to customer)"
    )
    
    # Metadata
    total_items = models.IntegerField(default=0)
    submitted_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    reviewed_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        ordering = ['-submitted_at']
        indexes = [
            models.Index(fields=['-submitted_at']),
            models.Index(fields=['status', '-submitted_at']),
        ]
    
    def __str__(self):
        return f"{self.quote_number} - {self.company_name}"
    
    def save(self, *args, **kwargs):
        # Update total items count
        if self.pk:
            self.total_items = self.items.count()
        super().save(*args, **kwargs)


class QuoteItem(models.Model):
    """Individual items in a quote request"""
    quote = models.ForeignKey(
        Quote,
        on_delete=models.CASCADE,
        related_name='items'
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='quote_items'
    )
    quantity = models.IntegerField(
        validators=[MinValueValidator(1)],
        help_text="Requested quantity"
    )
    notes = models.TextField(
        blank=True,
        help_text="Specific notes for this product"
    )
    
    # Snapshot of product details at time of quote
    product_name = models.CharField(max_length=255)
    product_uom = models.CharField(max_length=20)
    product_moq = models.IntegerField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at']
    
    def save(self, *args, **kwargs):
        # Snapshot product details
        if not self.product_name:
            self.product_name = self.product.name
            self.product_uom = self.product.uom
            self.product_moq = self.product.moq
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.product_name} x {self.quantity}"
    
    @property
    def meets_moq(self):
        """Check if quantity meets minimum order quantity"""
        return self.quantity >= self.product_moq
