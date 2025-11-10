# Technical Specification: Westend Corporation B2B Platform

## 1. Database Schema

### Product Model
```python
class Product(models.Model):
    # Basic Information
    name = CharField(max_length=255)
    slug = SlugField(unique=True)
    description = TextField()
    category = ForeignKey('Category')
    
    # Imagery
    primary_image = ImageField()
    gallery_images = ManyToMany('ProductImage')
    
    # Specifications
    uom = CharField(choices=UOM_CHOICES)  # kg, lbs, pieces, etc.
    weight_volume = DecimalField()
    moq = IntegerField()  # Minimum Order Quantity
    
    # Cold Chain
    storage_temp_min = DecimalField(default=-40)  # °C
    storage_temp_max = DecimalField(default=-18)  # °C
    
    # Packaging
    packaging_type = CharField()
    units_per_carton = IntegerField()
    
    # Status
    is_active = BooleanField(default=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
```

### Quote Model
```python
class Quote(models.Model):
    # Customer Information
    company_name = CharField(max_length=255)
    contact_person = CharField(max_length=255)
    email = EmailField()
    phone = CharField(max_length=50)
    country = CharField(max_length=100)
    
    # Quote Details
    quote_number = CharField(unique=True)
    status = CharField(choices=STATUS_CHOICES)
    total_items = IntegerField()
    
    # Timestamps
    submitted_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
    
class QuoteItem(models.Model):
    quote = ForeignKey('Quote')
    product = ForeignKey('Product')
    quantity = IntegerField()
    notes = TextField(blank=True)
```

## 2. API Endpoints

### Products API
```
GET    /api/products/              # List all products (with filters)
GET    /api/products/{slug}/       # Product detail
GET    /api/categories/            # List categories
GET    /api/products/search/       # Search products
```

### Quotes API
```
POST   /api/quotes/                # Submit new quote request
GET    /api/quotes/{id}/           # Get quote details (admin)
PATCH  /api/quotes/{id}/           # Update quote status (admin)
```

## 3. Frontend Components

### Core Components
```
components/
├── layout/
│   ├── Header.tsx              # Navigation with Quote Cart badge
│   ├── Footer.tsx
│   └── Layout.tsx
│
├── products/
│   ├── ProductCard.tsx         # Individual product display
│   ├── ProductGrid.tsx         # Grid view
│   ├── ProductTable.tsx        # Spreadsheet view (primary)
│   ├── ProductFilters.tsx      # Category, temp, search filters
│   └── ProductImage.tsx        # Optimized image component
│
├── cart/
│   ├── QuoteCart.tsx           # Cart sidebar/modal
│   ├── CartItem.tsx            # Individual cart item
│   ├── CartBadge.tsx           # Navigation badge
│   └── QuoteForm.tsx           # RFQ submission form
│
└── ui/
    ├── Button.tsx              # Shadcn UI button
    ├── Input.tsx
    ├── Table.tsx               # TanStack Table wrapper
    └── Badge.tsx               # Temperature badges
```

### Key Pages
```
app/
├── page.tsx                    # Homepage (hero + featured products)
├── products/
│   ├── page.tsx               # Product catalogue (main view)
│   └── [slug]/
│       └── page.tsx           # Product detail page
├── quote-cart/
│   └── page.tsx               # Quote cart & submission
└── api/
    └── [...]/                 # API route handlers (if needed)
```

## 4. State Management

### Quote Cart State (Context API)
```typescript
interface CartItem {
  productId: string;
  productName: string;
  quantity: number;
  uom: string;
  moq: number;
}

interface CartContext {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
}
```

### Data Fetching (TanStack Query)
```typescript
// Products query
useQuery({
  queryKey: ['products', filters],
  queryFn: () => fetchProducts(filters)
})

// Product detail query
useQuery({
  queryKey: ['product', slug],
  queryFn: () => fetchProduct(slug)
})
```

## 5. Image Optimization Strategy

### Next.js Image Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['res.cloudinary.com', 's3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}
```

### Usage Pattern
```tsx
<Image
  src={product.primaryImage}
  alt={product.name}
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL={product.blurHash}
/>
```

## 6. Styling System

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',  // Deep Corporate Blue
          light: '#004080',
        },
        secondary: {
          DEFAULT: '#99CCFF',  // Icy Blue
          light: '#CCE5FF',
        },
        accent: {
          DEFAULT: '#FF7043',  // Energetic Orange
          hover: '#FF5722',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#EAEAEA',
        }
      }
    }
  }
}
```

## 7. Performance Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Image Load Time:** < 1s (optimized)

## 8. Security Considerations

- CORS configuration for API
- Rate limiting on quote submissions
- Input validation and sanitization
- CSRF protection
- Secure image upload validation
- Environment variable management

## 9. Deployment Architecture

### Frontend (Vercel/Netlify)
- Automatic deployments from Git
- Edge caching
- Image optimization at edge
- Environment variables

### Backend (Railway/DigitalOcean)
- PostgreSQL managed database
- Redis caching layer
- Static file serving via CDN
- Automated backups

## 10. Testing Strategy

- **Unit Tests:** Django models, API serializers
- **Integration Tests:** API endpoints
- **E2E Tests:** Quote cart flow (Playwright)
- **Performance Tests:** Lighthouse CI
- **Visual Regression:** Chromatic/Percy
