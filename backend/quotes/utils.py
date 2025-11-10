"""
Utility functions for quote management
"""
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string


def send_quote_notification(quote):
    """
    Send email notification when a new quote is submitted
    """
    subject = f'New Quote Request: {quote.quote_number}'
    
    # Email content
    message = f"""
New Quote Request Received

Quote Number: {quote.quote_number}
Company: {quote.company_name}
Contact Person: {quote.contact_person}
Email: {quote.email}
Phone: {quote.phone}
Country: {quote.country}

Total Items: {quote.total_items}

Items:
"""
    
    for item in quote.items.all():
        moq_status = "✓" if item.meets_moq else "⚠ Below MOQ"
        message += f"\n- {item.product_name}: {item.quantity} {item.product_uom} {moq_status}"
        if item.notes:
            message += f"\n  Notes: {item.notes}"
    
    if quote.message:
        message += f"\n\nCustomer Message:\n{quote.message}"
    
    message += f"\n\nView in admin: {settings.FRONTEND_URL}/admin/quotes/quote/{quote.id}/"
    
    # Send email
    try:
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.QUOTE_NOTIFICATION_EMAIL],
            fail_silently=False,
        )
        return True
    except Exception as e:
        print(f"Email sending failed: {str(e)}")
        return False
