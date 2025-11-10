# Westend Corporation - International B2B Frozen Food Platform

Premium B2B Lead Generation Catalogue with Cold Chain Focus

## 🎯 Project Overview

**Client:** Westend Corporation  
**Architecture:** Headless (Decoupled) - Next.js Frontend + Django Backend  
**Primary Goal:** Generate high-quality international sales leads through Quote Cart functionality

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (Next.js)                      │
│  - Server-Side Rendering (SSR/SSG)                         │
│  - Image Optimization                                       │
│  - Quote Cart with Persistent State                        │
│  - Responsive B2B Catalogue                                 │
└─────────────────────────────────────────────────────────────┘
                              ↕ REST API
┌─────────────────────────────────────────────────────────────┐
│                     BACKEND (Django)                        │
│  - Django REST Framework API                                │
│  - Admin Panel (Content Management)                         │
│  - PostgreSQL Database                                      │
│  - Lead Management & Email Notifications                    │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 Design System

### Color Palette (Based on Color Psychology Research)

| Role | Color | Hex | Purpose |
|------|-------|-----|---------|
| **Primary** | Deep Corporate Blue | `#003366` | Trust, Security, Professionalism |
| **Secondary** | Icy Blue | `#99CCFF` | Freshness, Cold Chain, Purity |
| **Accent** | Energetic Orange | `#FF7043` | CTAs, Urgency, Appetite |
| **Neutral** | Off-White/Light Gray | `#F9F9F9` / `#EAEAEA` | Clarity, Readability |

### Key USPs to Emphasize
- ❄️ **Unbroken Cold Chain Integrity** (-40°C to -18°C)
- 📸 **Product Quality Visibility** (High-res imagery)
- ⚡ **Efficiency and Reliability** (Fast, functional interface)

## 📁 Project Structure

```
westendcorp/
├── frontend/              # Next.js application
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities and API clients
│   │   └── styles/       # Global styles
│   ├── public/           # Static assets
│   └── package.json
│
├── backend/              # Django application
│   ├── api/             # Django REST Framework
│   ├── products/        # Product models and admin
│   ├── quotes/          # Quote cart and lead management
│   ├── core/            # Core settings and config
│   └── requirements.txt
│
└── docs/                # Additional documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Python 3.11+
- PostgreSQL 14+
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## 🔑 Key Features

### 1. Product Catalogue
- Spreadsheet-style view with sortable columns
- High-resolution product imagery (Next.js Image optimization)
- Detailed specifications: UOM, Weight/Volume, MOQ, Cold-chain requirements
- Temperature badges (-40°C to -18°C capability)

### 2. Quote Cart System
- Bulk quantity entry directly in catalogue view
- Persistent cart state (survives page refresh)
- Visual cart indicator in navigation
- Convert to RFQ (Request for Quote) on submission

### 3. Lead Generation
- Structured quote submission form
- Automatic email notifications
- Lead storage and tracking in Django admin
- Export capabilities for sales team

### 4. Admin Panel
- Easy product management (CRUD operations)
- Image upload with CDN integration
- Quote/lead management dashboard
- Customer inquiry tracking

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Next.js 14 (React, TypeScript) | Performance, SEO, Image Optimization |
| **Styling** | Tailwind CSS, Shadcn UI | Modern, responsive design system |
| **State Management** | TanStack Query, Context API | Data fetching, cart state |
| **Backend** | Django 5.0 + DRF | Secure API, business logic |
| **Database** | PostgreSQL | Structured data storage |
| **Caching** | Redis | Performance optimization |
| **Image Hosting** | Cloudinary / AWS S3 | CDN-backed image delivery |
| **Email** | SendGrid | Automated notifications |

## 📊 Success Metrics

- **Quote Cart Submission Rate** (Primary KPI)
- **Time on Site** (Engagement)
- **Bounce Rate** (User Experience)
- **Image Load Performance** (Core Web Vitals)

## 🌍 Target Audience

- International Procurement Officers
- Food Service Managers
- Global Distributors
- B2B Wholesale Buyers

## 📝 Development Phases

1. ✅ Project setup and structure
2. 🔄 Django models and API development
3. 🔄 Next.js frontend with design system
4. 🔄 Product catalogue implementation
5. 🔄 Quote cart functionality
6. 🔄 Integration and testing
7. 🔄 Deployment and monitoring

## 📞 Support

For questions or issues, contact the development team.

---

**Built with ❄️ for premium frozen food B2B commerce**
