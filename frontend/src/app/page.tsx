import Link from 'next/link'
import { ArrowRight, Snowflake, Truck, Phone, Package } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Pure Glassmorphism */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Vibrant Food Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-green-200 to-orange-200">
          {/* Large Food Images - Optimized */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-10 left-10 text-[180px]">🌾</div>
            <div className="absolute top-1/4 right-10 text-[160px]">🥦</div>
            <div className="absolute bottom-20 left-1/4 text-[200px]">🥟</div>
            <div className="absolute bottom-10 right-10 text-[150px]">🍓</div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Pure Glass Badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full border-2 border-white shadow-xl">
              <Snowflake className="w-4 h-4 text-secondary" />
              <span className="text-xs font-bold text-primary">
                Fresh • Frozen at -40°C • Delivered to Your Door
              </span>
            </div>
            
            {/* Main Heading - Glass Effect */}
            <div className="mb-6 bg-white/40 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border-2 border-white shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight" style={{textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>
                Premium Frozen Foods
                <br />
                <span className="text-3xl md:text-5xl text-primary">For Bulk Orders</span>
              </h1>
            </div>
            
            {/* Pure Glass Product Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-xl border-2 border-white shadow-lg transform hover:scale-105 transition-all hover:bg-white/70">
                <span className="text-2xl">🌾</span>
                <span className="font-bold text-primary text-sm">Pulses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-xl border-2 border-white shadow-lg transform hover:scale-105 transition-all hover:bg-white/70">
                <span className="text-2xl">🥦</span>
                <span className="font-bold text-secondary text-sm">Vegetables</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-xl border-2 border-white shadow-lg transform hover:scale-105 transition-all hover:bg-white/70">
                <span className="text-2xl">🥟</span>
                <span className="font-bold text-accent text-sm">Samosas</span>
              </div>
            </div>
            
            <p className="text-base md:text-lg mb-10 text-primary max-w-2xl mx-auto leading-relaxed bg-white/50 backdrop-blur-xl rounded-xl p-5 border-2 border-white shadow-lg font-semibold">
              Quality grocery & staples, frozen vegetables & fruits, and ready-to-cook processed foods delivered to your doorstep
            </p>
            
            {/* Pure Glass CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/products" className="btn bg-secondary hover:bg-secondary-dark text-white text-base px-8 py-3 shadow-2xl transform hover:scale-105 transition-all font-bold rounded-xl border-2 border-white">
                <Package className="w-5 h-5" />
                Browse Products
              </Link>
              <Link href="/contact" className="btn bg-white/70 backdrop-blur-xl hover:bg-white text-primary border-2 border-white text-base px-8 py-3 shadow-2xl transform hover:scale-105 transition-all font-bold rounded-xl">
                <Phone className="w-5 h-5" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Pure Glass */}
      <section className="py-20 relative bg-gradient-to-br from-orange-200 via-amber-200 to-green-200">
        {/* Background Food Elements - Optimized */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 text-[150px]">🍲</div>
          <div className="absolute bottom-20 right-10 text-[150px]">🥗</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white shadow-2xl mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">What We Offer</h2>
            </div>
            <p className="text-base text-primary max-w-2xl mx-auto font-bold bg-white/50 backdrop-blur-lg rounded-xl p-3 border-2 border-white shadow-lg">
              Three main categories of premium frozen products for bulk orders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Grocery & Staples */}
            <div className="group relative bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white transform hover:-translate-y-2 hover:bg-white/80">
              {/* Product Image Area */}
              <div className="h-48 bg-gradient-to-br from-amber-100/80 to-amber-50/80 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">🌾</div>
                <div className="absolute top-3 right-3 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                  BULK ORDERS
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white/60 backdrop-blur-xl">
                <h3 className="text-xl font-bold mb-2 text-primary">Grocery & Staples</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                  Pulses, wheat, rice, flour, and all essential grocery staples in bulk quantities
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-primary/20 shadow-sm">
                    <Package className="w-4 h-4 text-accent" />
                    <span className="font-bold">MOQ: 50 kg</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-secondary/20 shadow-sm">
                    <Snowflake className="w-4 h-4 text-secondary" />
                    <span className="font-bold">-40°C to -18°C</span>
                  </div>
                </div>
                
                <Link href="/products?category=pulses" className="btn bg-primary hover:bg-primary-light text-white w-full text-center py-3 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-all text-sm">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Frozen Vegetables & Fruits */}
            <div className="group relative bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white transform hover:-translate-y-2 hover:bg-white/80">
              {/* Product Image Area */}
              <div className="h-48 bg-gradient-to-br from-green-100/80 to-green-50/80 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">🥦</div>
                <div className="absolute top-3 right-3 bg-secondary px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                  FARM FRESH
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white/60 backdrop-blur-xl">
                <h3 className="text-xl font-bold mb-2 text-primary">Frozen Vegetables & Fruits</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                  Green peas, sweet corn, mixed vegetables, berries, mango chunks - frozen at peak freshness
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-primary/20 shadow-sm">
                    <Package className="w-4 h-4 text-accent" />
                    <span className="font-bold">MOQ: 15-25 kg</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-secondary/20 shadow-sm">
                    <Snowflake className="w-4 h-4 text-secondary" />
                    <span className="font-bold">-40°C to -18°C</span>
                  </div>
                </div>
                
                <Link href="/products?category=vegetables" className="btn bg-secondary hover:bg-secondary-dark text-white w-full text-center py-3 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-all text-sm">
                  View Products →
                </Link>
              </div>
            </div>

            {/* Processed Food */}
            <div className="group relative bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white transform hover:-translate-y-2 hover:bg-white/80">
              {/* Product Image Area */}
              <div className="h-48 bg-gradient-to-br from-orange-100/80 to-orange-50/80 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">🥟</div>
                <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                  READY TO COOK
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-white/60 backdrop-blur-xl">
                <h3 className="text-xl font-bold mb-2 text-primary">Processed Food</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                  Samosas, spring rolls, cutlets, pakoras - delicious ready-to-cook items for quick service
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-primary/20 shadow-sm">
                    <Package className="w-4 h-4 text-accent" />
                    <span className="font-bold">MOQ: 50-100 pcs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary bg-white/70 backdrop-blur-lg px-3 py-2 rounded-lg border border-secondary/20 shadow-sm">
                    <Snowflake className="w-4 h-4 text-secondary" />
                    <span className="font-bold">-40°C to -18°C</span>
                  </div>
                </div>
                
                <Link href="/products?category=processed" className="btn bg-accent hover:bg-accent-hover text-white w-full text-center py-3 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-all text-sm">
                  View Products →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  Why Choose Westend Corporation?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Doorstep Delivery</h3>
                      <p className="text-neutral-600">
                        We deliver bulk orders directly to your location with our temperature-controlled logistics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Snowflake className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Cold Chain Excellence</h3>
                      <p className="text-neutral-600">
                        Unbroken cold chain from -40°C to -18°C ensures maximum freshness and quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Bulk Ordering Made Simple</h3>
                      <p className="text-neutral-600">
                        Easy ordering process for large quantities. Perfect for restaurants, hotels, and institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-lg relative overflow-hidden border-2 border-secondary">
                <div className="absolute top-0 right-0 text-8xl opacity-5">🍱</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10 text-primary">Ready to Place Bulk Order?</h3>
                <p className="text-base mb-6 text-neutral-600 relative z-10">
                  Get in touch with us today to discuss your requirements. We offer competitive pricing for bulk orders and doorstep delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                  <Link href="/contact" className="btn bg-secondary hover:bg-secondary-dark text-white text-sm px-6 py-3 inline-flex items-center gap-2 font-semibold shadow-md transform hover:scale-105 transition-all rounded-lg">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                  <Link href="/products" className="btn bg-white hover:bg-neutral-50 text-primary border-2 border-primary text-sm px-6 py-3 inline-flex items-center gap-2 font-semibold shadow-md transform hover:scale-105 transition-all rounded-lg">
                    <Package className="w-4 h-4" />
                    View Catalog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t-2 border-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-20 text-8xl">🛒</div>
          <div className="absolute bottom-10 right-20 text-8xl">📞</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let's Discuss Your Bulk Order
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-neutral-600 leading-relaxed">
            Whether you need grocery pulses, frozen vegetables & fruits, or delicious samosas - we've got you covered with competitive pricing and reliable doorstep delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-secondary hover:bg-secondary-dark text-white text-base px-10 py-4 font-semibold shadow-lg transform hover:scale-105 transition-all rounded-lg">
              <Phone className="w-5 h-5" />
              Get Quote
            </Link>
            <Link href="/products" className="btn bg-white hover:bg-neutral-50 text-primary border-2 border-primary text-base px-10 py-4 font-semibold shadow-lg transform hover:scale-105 transition-all rounded-lg">
              <Package className="w-5 h-5" />
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
