"""
Django admin configuration for Quotes
"""
from django.contrib import admin
from django.utils.html import format_html
from django.utils import timezone
from .models import Quote, QuoteItem


class QuoteItemInline(admin.TabularInline):
    """Inline admin for quote items"""
    model = QuoteItem
    extra = 0
    readonly_fields = ['product_name', 'product_uom', 'product_moq', 'meets_moq_badge']
    fields = ['product', 'quantity', 'product_uom', 'product_moq', 'meets_moq_badge', 'notes']
    
    def meets_moq_badge(self, obj):
        """Visual indicator for MOQ compliance"""
        if obj.meets_moq:
            return format_html(
                '<span style="background: #4CAF50; color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px;">✓ Meets MOQ</span>'
            )
        return format_html(
            '<span style="background: #FF5722; color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px;">⚠ Below MOQ</span>'
        )
    meets_moq_badge.short_description = 'MOQ Status'


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    list_display = [
        'quote_number',
        'company_name',
        'contact_person',
        'email',
        'country',
        'total_items',
        'status_badge',
        'submitted_at',
    ]
    list_filter = [
        'status',
        'country',
        'submitted_at',
    ]
    search_fields = [
        'quote_number',
        'company_name',
        'contact_person',
        'email',
        'phone'
    ]
    readonly_fields = [
        'quote_number',
        'total_items',
        'submitted_at',
        'updated_at',
        'reviewed_at'
    ]
    inlines = [QuoteItemInline]
    
    fieldsets = (
        ('Quote Information', {
            'fields': (
                'quote_number',
                'status',
                'total_items',
            )
        }),
        ('Customer Details', {
            'fields': (
                'company_name',
                'contact_person',
                'email',
                'phone',
                'country',
            )
        }),
        ('Customer Message', {
            'fields': ('message',),
            'classes': ('collapse',)
        }),
        ('Internal Management', {
            'fields': ('internal_notes',),
            'description': 'Internal notes - not visible to customer'
        }),
        ('Timestamps', {
            'fields': (
                'submitted_at',
                'reviewed_at',
                'updated_at',
            ),
            'classes': ('collapse',)
        }),
    )
    
    def status_badge(self, obj):
        """Colored status badge"""
        colors = {
            'pending': '#FF9800',
            'reviewed': '#2196F3',
            'quoted': '#9C27B0',
            'converted': '#4CAF50',
            'declined': '#F44336',
        }
        color = colors.get(obj.status, '#757575')
        return format_html(
            '<span style="background: {}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: bold;">{}</span>',
            color,
            obj.get_status_display()
        )
    status_badge.short_description = 'Status'
    
    actions = ['mark_as_reviewed', 'mark_as_quoted', 'mark_as_converted']
    
    def mark_as_reviewed(self, request, queryset):
        updated = queryset.update(status='reviewed', reviewed_at=timezone.now())
        self.message_user(request, f'{updated} quote(s) marked as reviewed.')
    mark_as_reviewed.short_description = 'Mark as reviewed'
    
    def mark_as_quoted(self, request, queryset):
        updated = queryset.update(status='quoted')
        self.message_user(request, f'{updated} quote(s) marked as quoted.')
    mark_as_quoted.short_description = 'Mark as quoted'
    
    def mark_as_converted(self, request, queryset):
        updated = queryset.update(status='converted')
        self.message_user(request, f'{updated} quote(s) marked as converted.')
    mark_as_converted.short_description = 'Mark as converted to order'


@admin.register(QuoteItem)
class QuoteItemAdmin(admin.ModelAdmin):
    list_display = [
        'quote',
        'product_name',
        'quantity',
        'product_uom',
        'product_moq',
        'moq_status',
        'created_at'
    ]
    list_filter = ['quote__status', 'product__category', 'created_at']
    search_fields = ['quote__quote_number', 'product__name', 'product_name']
    readonly_fields = ['product_name', 'product_uom', 'product_moq', 'created_at']
    
    def moq_status(self, obj):
        """MOQ compliance indicator"""
        if obj.meets_moq:
            return format_html('<span style="color: #4CAF50;">✓ Meets MOQ</span>')
        return format_html('<span style="color: #FF5722;">⚠ Below MOQ</span>')
    moq_status.short_description = 'MOQ Status'
