"""
DRF Serializers for Quotes API
"""
from rest_framework import serializers
from .models import Quote, QuoteItem
from products.models import Product


class QuoteItemInputSerializer(serializers.Serializer):
    """Serializer for quote item input"""
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)
    notes = serializers.CharField(required=False, allow_blank=True)


class QuoteItemSerializer(serializers.ModelSerializer):
    """Serializer for quote items"""
    meets_moq = serializers.ReadOnlyField()
    
    class Meta:
        model = QuoteItem
        fields = [
            'id',
            'product',
            'product_name',
            'quantity',
            'product_uom',
            'product_moq',
            'meets_moq',
            'notes',
            'created_at'
        ]
        read_only_fields = ['product_name', 'product_uom', 'product_moq']


class QuoteCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating new quotes"""
    items = QuoteItemInputSerializer(many=True, write_only=True)
    
    class Meta:
        model = Quote
        fields = [
            'company_name',
            'contact_person',
            'email',
            'phone',
            'country',
            'message',
            'items'
        ]
    
    def validate_items(self, value):
        """Validate that items list is not empty"""
        if not value:
            raise serializers.ValidationError("At least one item is required.")
        return value
    
    def validate(self, data):
        """Validate that all product IDs exist"""
        items = data.get('items', [])
        product_ids = [item['product_id'] for item in items]
        
        # Check if all products exist and are active
        existing_products = Product.objects.filter(
            id__in=product_ids,
            is_active=True
        ).values_list('id', flat=True)
        
        missing_ids = set(product_ids) - set(existing_products)
        if missing_ids:
            raise serializers.ValidationError(
                f"Invalid or inactive product IDs: {', '.join(map(str, missing_ids))}"
            )
        
        return data
    
    def create(self, validated_data):
        """Create quote with items"""
        items_data = validated_data.pop('items')
        
        # Create quote
        quote = Quote.objects.create(**validated_data)
        
        # Create quote items
        for item_data in items_data:
            product = Product.objects.get(id=item_data['product_id'])
            QuoteItem.objects.create(
                quote=quote,
                product=product,
                quantity=item_data['quantity'],
                notes=item_data.get('notes', '')
            )
        
        # Update total items count
        quote.total_items = len(items_data)
        quote.save()
        
        return quote


class QuoteDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for quote retrieval"""
    items = QuoteItemSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = Quote
        fields = [
            'id',
            'quote_number',
            'company_name',
            'contact_person',
            'email',
            'phone',
            'country',
            'message',
            'status',
            'status_display',
            'total_items',
            'items',
            'submitted_at',
            'updated_at',
        ]
        read_only_fields = [
            'quote_number',
            'total_items',
            'submitted_at',
            'updated_at'
        ]
