# Westend Corporation - Setup Guide

Complete step-by-step guide to set up and run the B2B Frozen Food Platform.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.11+** - [Download](https://www.python.org/downloads/)
- **Node.js 18+** and npm - [Download](https://nodejs.org/)
- **PostgreSQL 14+** - [Download](https://www.postgresql.org/download/)
- **Redis** (optional, for caching) - [Download](https://redis.io/download)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Quick Start

### 1. Backend Setup (Django)

#### Step 1: Navigate to backend directory
```powershell
cd backend
```

#### Step 2: Create virtual environment
```powershell
python -m venv venv
```

#### Step 3: Activate virtual environment
```powershell
# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

#### Step 4: Install dependencies
```powershell
pip install -r requirements.txt
```

#### Step 5: Create environment file
```powershell
# Copy the example file
copy .env.example .env

# Edit .env with your settings
```

**Important `.env` configurations:**
```env
SECRET_KEY=your-generated-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (Create this database in PostgreSQL first)
DATABASE_URL=postgresql://postgres:password@localhost:5432/westendcorp

# For development, you can use SQLite instead:
# DATABASE_URL=sqlite:///db.sqlite3

# Email (Get free API key from SendGrid)
SENDGRID_API_KEY=your-sendgrid-api-key
DEFAULT_FROM_EMAIL=noreply@westendcorp.com
QUOTE_NOTIFICATION_EMAIL=sales@westendcorp.com

# Cloudinary (optional for development, get free account)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

#### Step 6: Create PostgreSQL database
```powershell
# Open PostgreSQL command line (psql)
psql -U postgres

# Create database
CREATE DATABASE westendcorp;

# Exit psql
\q
```

**OR use SQLite for development** (no setup needed, just use the SQLite DATABASE_URL above)

#### Step 7: Run migrations
```powershell
python manage.py migrate
```

#### Step 8: Create superuser (admin account)
```powershell
python manage.py createsuperuser
```

Follow the prompts to create your admin account.

#### Step 9: Run development server
```powershell
python manage.py runserver
```

Backend will be available at: **http://localhost:8000**
Admin panel at: **http://localhost:8000/admin**
API docs at: **http://localhost:8000/api/docs/**

---

### 2. Frontend Setup (Next.js)

Open a **new terminal** (keep the backend running).

#### Step 1: Navigate to frontend directory
```powershell
cd frontend
```

#### Step 2: Install dependencies
```powershell
npm install
```

This will install all required packages and resolve the TypeScript lint errors you're seeing.

#### Step 3: Create environment file
```powershell
# Copy the example file
copy .env.local.example .env.local

# Edit .env.local with your settings
```

**`.env.local` configuration:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_NAME=Westend Corporation
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

#### Step 4: Run development server
```powershell
npm run dev
```

Frontend will be available at: **http://localhost:3000**

---

## 🎨 Adding Sample Data

### Via Django Admin Panel

1. Go to **http://localhost:8000/admin**
2. Log in with your superuser credentials
3. Add **Categories** (e.g., "Seafood", "Poultry", "Vegetables")
4. Add **Products** with:
   - Name, description, images
   - UOM, MOQ, weight/volume
   - Temperature requirements (-40°C to -18°C)
   - Packaging details

### Via Django Shell (Quick Sample Data)

```powershell
python manage.py shell
```

```python
from products.models import Category, Product

# Create categories
seafood = Category.objects.create(
    name="Frozen Seafood",
    description="Premium frozen seafood products"
)

poultry = Category.objects.create(
    name="Frozen Poultry",
    description="High-quality frozen poultry"
)

# Create sample products
Product.objects.create(
    name="Premium Frozen Shrimp",
    slug="premium-frozen-shrimp",
    category=seafood,
    description="Wild-caught frozen shrimp, IQF processed",
    short_description="Premium quality frozen shrimp",
    uom="kg",
    weight_volume=1.0,
    moq=100,
    storage_temp_min=-40.00,
    storage_temp_max=-18.00,
    packaging_type="IQF, Vacuum-sealed",
    units_per_carton=10,
    is_active=True,
    is_featured=True
)

Product.objects.create(
    name="Frozen Chicken Breast",
    slug="frozen-chicken-breast",
    category=poultry,
    description="Boneless, skinless chicken breast",
    short_description="Premium frozen chicken breast",
    uom="kg",
    weight_volume=1.0,
    moq=200,
    storage_temp_min=-40.00,
    storage_temp_max=-18.00,
    packaging_type="Vacuum-sealed",
    units_per_carton=12,
    is_active=True,
    is_featured=True
)

exit()
```

---

## 🧪 Testing the Platform

### Test the API

1. **Get all products:**
   ```
   http://localhost:8000/api/products/
   ```

2. **Get featured products:**
   ```
   http://localhost:8000/api/products/featured/
   ```

3. **Get categories:**
   ```
   http://localhost:8000/api/products/categories/
   ```

### Test the Frontend

1. Visit **http://localhost:3000**
2. Browse to **Products** page
3. Add items to **Quote Cart**
4. Fill out **Request Quote** form
5. Check your email (or Django admin) for quote submission

---

## 📦 Project Structure

```
westendcorp/
├── backend/                 # Django backend
│   ├── core/               # Django settings & config
│   ├── products/           # Product models & API
│   ├── quotes/             # Quote/RFQ management
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # Pages (App Router)
│   │   ├── components/    # React components
│   │   └── lib/           # Utilities & API client
│   ├── public/            # Static assets
│   └── package.json
│
├── README.md
├── PROJECT_SPEC.md
└── SETUP_GUIDE.md (this file)
```

---

## 🔧 Common Issues & Solutions

### Issue: "Cannot find module" errors in frontend

**Solution:** Run `npm install` in the frontend directory. All TypeScript errors will resolve after installation.

### Issue: Database connection error

**Solution:** 
- Ensure PostgreSQL is running
- Check DATABASE_URL in `.env`
- Or use SQLite for development: `DATABASE_URL=sqlite:///db.sqlite3`

### Issue: CORS errors when frontend calls backend

**Solution:** Ensure `CORS_ALLOWED_ORIGINS` in backend `.env` includes `http://localhost:3000`

### Issue: Images not uploading

**Solution:** 
- For development, images will save to `backend/media/`
- For production, configure Cloudinary credentials in `.env`

### Issue: Email notifications not working

**Solution:**
- Get free SendGrid API key: https://sendgrid.com/
- Add to `.env`: `SENDGRID_API_KEY=your-key`
- Or check Django console for email output in development

---

## 🌐 API Documentation

Once the backend is running, visit:
- **Swagger UI:** http://localhost:8000/api/docs/
- **API Schema:** http://localhost:8000/api/schema/

---

## 🎯 Next Steps

1. ✅ Set up backend and frontend
2. ✅ Add sample data via admin panel
3. ✅ Test quote cart functionality
4. 📝 Customize branding and colors (see `tailwind.config.ts`)
5. 📸 Add high-quality product images
6. 🚀 Deploy to production (see deployment guides below)

---

## 🚀 Deployment

### Backend Deployment (Railway/Heroku/DigitalOcean)

1. Set environment variables in production
2. Set `DEBUG=False`
3. Configure `ALLOWED_HOSTS`
4. Run migrations: `python manage.py migrate`
5. Collect static files: `python manage.py collectstatic`
6. Use Gunicorn: `gunicorn core.wsgi`

### Frontend Deployment (Vercel/Netlify)

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set environment variables
4. Deploy!

---

## 📞 Support

For issues or questions:
- Check `PROJECT_SPEC.md` for technical details
- Review Django admin for data management
- Check browser console for frontend errors
- Check terminal for backend errors

---

**Built with ❄️ for Westend Corporation**
