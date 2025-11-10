"""
API Views for Quotes
"""
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.conf import settings
from .models import Quote
from .serializers import QuoteCreateSerializer, QuoteDetailSerializer
from .utils import send_quote_notification


class QuoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint for quote management
    
    create: Submit a new quote request (public)
    retrieve: Get quote details by quote number (admin only in production)
    list: List all quotes (admin only)
    """
    queryset = Quote.objects.all().prefetch_related('items__product')
    lookup_field = 'quote_number'
    
    def get_serializer_class(self):
        """Use different serializers for create vs retrieve"""
        if self.action == 'create':
            return QuoteCreateSerializer
        return QuoteDetailSerializer
    
    def get_permissions(self):
        """Allow anyone to create quotes"""
        if self.action == 'create':
            return [AllowAny()]
        return super().get_permissions()
    
    def create(self, request, *args, **kwargs):
        """Create new quote and send notification"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        quote = serializer.save()
        
        # Send email notification
        try:
            send_quote_notification(quote)
        except Exception as e:
            # Log error but don't fail the request
            print(f"Failed to send quote notification: {str(e)}")
        
        # Return created quote details
        response_serializer = QuoteDetailSerializer(quote)
        return Response(
            response_serializer.data,
            status=status.HTTP_201_CREATED
        )
    
    @action(detail=True, methods=['post'])
    def update_status(self, request, quote_number=None):
        """Update quote status (admin only)"""
        quote = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in dict(Quote.STATUS_CHOICES):
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        quote.status = new_status
        quote.save()
        
        serializer = self.get_serializer(quote)
        return Response(serializer.data)
