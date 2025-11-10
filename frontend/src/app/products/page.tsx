'use client'

import { useState } from 'react'
import { Snowflake, Package, Phone } from 'lucide-react'

// Mock product data
const mockProducts = [
  // Grocery & Staples
  {
    id: 1,
    name: 'Premium Red Lentils',
    category: 'Grocery & Staples',
    emoji: '🌾',
    description: 'High-quality red lentils, perfect for dal and soups',
    moq: '50 kg',
    storage: '-40°C to -18°C',
    color: 'amber'
  },
  {
    id: 2,
    name: 'Chickpeas (Kabuli Chana)',
    category: 'Grocery & Staples',
    emoji: '🌾',
    description: 'Premium chickpeas for curries and salads',
    moq: '50 kg',
    storage: '-40°C to -18°C',
    color: 'amber'
  },
  {
    id: 3,
    name: 'Kidney Beans (Rajma)',
    category: 'Grocery & Staples',
    emoji: '🌾',
    description: 'Dark red kidney beans, ideal for traditional dishes',
    moq: '50 kg',
    storage: '-40°C to -18°C',
    color: 'amber'
  },
  {
    id: 4,
    name: 'Yellow Moong Dal',
    category: 'Grocery & Staples',
    emoji: '🌾',
    description: 'Split yellow moong lentils for quick cooking',
    moq: '50 kg',
    storage: '-40°C to -18°C',
    color: 'amber'
  },
  {
    id: 5,
    name: 'Black Gram (Urad Dal)',
    category: 'Grocery & Staples',
    emoji: '🌾',
    description: 'Premium black gram for authentic Indian cuisine',
    moq: '50 kg',
    storage: '-40°C to -18°C',
    color: 'amber'
  },
  
  // Frozen Vegetables & Fruits
  {
    id: 6,
    name: 'Frozen Green Peas',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🥦',
    description: 'Farm-fresh green peas frozen at peak freshness',
    moq: '25 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  {
    id: 7,
    name: 'Frozen Sweet Corn',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🌽',
    description: 'Sweet corn kernels, perfect for any dish',
    moq: '25 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  {
    id: 8,
    name: 'Mixed Vegetables',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🥕',
    description: 'Assorted vegetables including carrots, beans, and peas',
    moq: '25 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  {
    id: 9,
    name: 'Frozen Spinach',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🥬',
    description: 'Chopped spinach, ready to use',
    moq: '20 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  {
    id: 10,
    name: 'Frozen Mixed Berries',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🫐',
    description: 'Strawberries, blueberries, and raspberries mix',
    moq: '15 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  {
    id: 11,
    name: 'Frozen Mango Chunks',
    category: 'Frozen Vegetables & Fruits',
    emoji: '🥭',
    description: 'Sweet mango pieces, perfect for smoothies and desserts',
    moq: '20 kg',
    storage: '-40°C to -18°C',
    color: 'green'
  },
  
  // Processed Foods
  {
    id: 12,
    name: 'Vegetable Samosas',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Classic vegetable samosas, ready to fry',
    moq: '100 pieces (5 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
  {
    id: 13,
    name: 'Chicken Samosas',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Spiced chicken samosas, restaurant quality',
    moq: '100 pieces (5 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
  {
    id: 14,
    name: 'Spring Rolls',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Crispy vegetable spring rolls',
    moq: '100 pieces (4 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
  {
    id: 15,
    name: 'Aloo Tikki (Potato Cutlets)',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Spiced potato patties, ready to fry',
    moq: '50 pieces (3 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
  {
    id: 16,
    name: 'Paneer Pakoras',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Cottage cheese fritters in spiced batter',
    moq: '50 pieces (3 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
  {
    id: 17,
    name: 'Veg Cutlets',
    category: 'Processed Food',
    emoji: '🥟',
    description: 'Mixed vegetable cutlets, crispy and delicious',
    moq: '50 pieces (3 kg)',
    storage: '-40°C to -18°C',
    color: 'orange'
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = ['All', 'Grocery & Staples', 'Frozen Vegetables & Fruits', 'Processed Food']
  
  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-green-50 to-orange-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #8B4513 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 text-[150px] opacity-10">🛒</div>
          <div className="absolute bottom-10 left-10 text-[150px] opacity-10">📦</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-secondary/20">
              <Package className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm">
                Browse Our Complete Product Catalog
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Our Products</h1>
            <p className="text-xl md:text-2xl text-neutral-700">
              Premium quality frozen products for bulk orders
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Info Note */}
          <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-food-frozen to-white border-l-4 border-secondary rounded-lg p-6 shadow-lg">
            <p className="text-neutral-700">
              <span className="font-bold text-primary">📸 Note:</span> Product images are currently placeholders. 
              Once you connect the backend and upload product images through the Django admin panel, 
              actual product photos will be displayed here automatically.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-neutral-100"
              >
                {/* Product Image Placeholder - Will show actual images from backend */}
                <div className={`relative h-56 bg-gradient-to-br ${
                  product.color === 'amber' ? 'from-amber-100 to-amber-50' :
                  product.color === 'green' ? 'from-green-100 to-green-50' :
                  'from-orange-100 to-orange-50'
                } flex items-center justify-center`}>
                  <div className="text-8xl">{product.emoji}</div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                      <Snowflake className="w-3 h-3" />
                      <span>-40°C</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-800">{product.name}</h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-neutral-700">Min. Order:</span>
                      </div>
                      <span className="font-bold text-primary">{product.moq}</span>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="btn btn-primary w-full text-center group"
                  >
                    <span>Request Quote</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary via-primary-light to-accent text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden border-4 border-white">
            <div className="absolute top-0 right-0 text-9xl opacity-10">📞</div>
            <div className="absolute bottom-0 left-0 text-9xl opacity-10">🤝</div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Need Custom Quantities?</h2>
            <p className="text-lg mb-8 text-white/95 relative z-10 max-w-2xl mx-auto">
              We can accommodate special requirements and custom bulk orders. Get in touch with our team to discuss your needs and get competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="/contact" className="btn bg-white text-primary hover:bg-secondary hover:text-white text-lg px-10 py-4 font-bold shadow-2xl transform hover:scale-105 transition-all">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a href="tel:+1234567890" className="btn bg-secondary text-white hover:bg-secondary-dark text-lg px-10 py-4 font-bold shadow-2xl transform hover:scale-105 transition-all border-2 border-white">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
