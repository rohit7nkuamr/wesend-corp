import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Product API
export const productApi = {
  getAll: async (params?: Record<string, any>) => {
    const response = await apiClient.get('/products/', { params })
    return response.data
  },
  
  getBySlug: async (slug: string) => {
    const response = await apiClient.get(`/products/${slug}/`)
    return response.data
  },
  
  getFeatured: async () => {
    const response = await apiClient.get('/products/featured/')
    return response.data
  },
  
  search: async (query: string, filters?: Record<string, any>) => {
    const response = await apiClient.get('/products/search/', {
      params: { q: query, ...filters }
    })
    return response.data
  },
}

// Category API
export const categoryApi = {
  getAll: async () => {
    const response = await apiClient.get('/products/categories/')
    return response.data
  },
  
  getBySlug: async (slug: string) => {
    const response = await apiClient.get(`/products/categories/${slug}/`)
    return response.data
  },
}

// Quote API
export const quoteApi = {
  create: async (data: QuoteCreateData) => {
    const response = await apiClient.post('/quotes/', data)
    return response.data
  },
  
  getByNumber: async (quoteNumber: string) => {
    const response = await apiClient.get(`/quotes/${quoteNumber}/`)
    return response.data
  },
}

// Types
export interface Product {
  id: number
  name: string
  slug: string
  category_name: string
  category_slug: string
  short_description: string
  primary_image: string
  uom: string
  weight_volume: number
  moq: number
  storage_temp_min: number
  storage_temp_max: number
  temperature_range: string
  packaging_type: string
  units_per_carton: number
  is_featured: boolean
}

export interface ProductDetail extends Product {
  description: string
  gallery_images: Array<{
    id: number
    image: string
    alt_text: string
  }>
  carton_dimensions: string
  gross_weight: number
  origin_country: string
  certifications: string
  shelf_life: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description: string
  image: string
  product_count: number
  is_active: boolean
}

export interface QuoteItem {
  product_id: number
  quantity: number
  notes?: string
}

export interface QuoteCreateData {
  company_name: string
  contact_person: string
  email: string
  phone: string
  country: string
  message?: string
  items: QuoteItem[]
}

export interface Quote {
  id: number
  quote_number: string
  company_name: string
  contact_person: string
  email: string
  phone: string
  country: string
  message: string
  status: string
  status_display: string
  total_items: number
  items: Array<{
    id: number
    product: number
    product_name: string
    quantity: number
    product_uom: string
    product_moq: number
    meets_moq: boolean
    notes: string
  }>
  submitted_at: string
  updated_at: string
}
