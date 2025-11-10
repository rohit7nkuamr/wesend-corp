import Link from 'next/link'
import { ArrowRight, Snowflake, Truck, Phone, Package } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
        {/* Decorative food elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-pulse">🌾</div>
          <div className="absolute top-40 right-20 text-9xl animate-pulse" style={{animationDelay: '0.5s'}}>🥦</div>
          <div className="absolute bottom-20 left-20 text-9xl animate-pulse" style={{animationDelay: '1s'}}>🥟</div>
          <div className="absolute bottom-10 right-10 text-9xl animate-pulse" style={{animationDelay: '1.5s'}}>🌽</div>
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-bounce">
              <span className="bg-white text-primary px-6 py-3 rounded-full text-sm font-bold shadow-2xl">
                ❄️ Fresh & Frozen • Delivered to Your Doorstep
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
              Premium Frozen Food
              <br />
              <span className="text-accent drop-shadow-lg">Bulk Orders Made Easy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white drop-shadow-lg max-w-3xl mx-auto font-medium">
              Premium grocery pulses, frozen vegetables & fruits, and delicious processed foods like samosas - maintained at -40°C to -18°C
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-accent hover:text-white text-lg px-10 py-5 shadow-2xl hover:shadow-accent/50 transform hover:scale-105 transition-all font-bold">
                Get in Touch
                <Phone className="w-5 h-5" />
              </Link>
              <Link href="/products" className="btn text-lg px-10 py-5 bg-secondary text-white hover:bg-secondary-dark shadow-2xl hover:shadow-secondary/50 font-bold transform hover:scale-105 transition-all">
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Three main categories of premium frozen products for bulk orders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Grocery Pulses */}
            <div className="group bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-2 border-amber-200 hover:border-accent">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                <div className="text-5xl">🌾</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Grocery Pulses</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Premium quality pulses including lentils, chickpeas, kidney beans, and more. Perfect for bulk requirements.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
                <Snowflake className="w-4 h-4" />
                <span>-40°C to -18°C</span>
              </div>
            </div>

            {/* Frozen Vegetables & Fruits */}
            <div className="group bg-gradient-to-br from-green-50 via-white to-green-50/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-2 border-green-200 hover:border-secondary">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                <div className="text-5xl">🥦</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Frozen Vegetables & Fruits</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Farm-fresh vegetables and fruits, frozen at peak freshness. Includes peas, corn, berries, and more.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-green-700 bg-green-100 px-4 py-2 rounded-full">
                <Snowflake className="w-4 h-4" />
                <span>-40°C to -18°C</span>
              </div>
            </div>

            {/* Processed Food - Samosas */}
            <div className="group bg-gradient-to-br from-orange-50 via-white to-orange-50/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border-2 border-orange-200 hover:border-primary">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-primary to-primary-dark rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                <div className="text-5xl">🥟</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Processed Food</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Delicious ready-to-cook items like samosas, spring rolls, cutlets, and more. Perfect for quick service.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-orange-700 bg-orange-100 px-4 py-2 rounded-full">
                <Snowflake className="w-4 h-4" />
                <span>-40°C to -18°C</span>
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
              
              <div className="bg-gradient-to-br from-primary via-primary-light to-accent rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl opacity-10">🍱</div>
                <div className="absolute bottom-0 left-0 text-7xl opacity-10">🥘</div>
                <h3 className="text-3xl font-bold mb-6 relative z-10 drop-shadow-lg">Ready to Order?</h3>
                <p className="text-lg mb-8 text-white drop-shadow relative z-10 font-medium">
                  Get in touch with us today to discuss your bulk frozen food requirements. Our team is ready to assist you.
                </p>
                <Link href="/contact" className="btn bg-white text-primary hover:bg-accent hover:text-white text-lg px-8 py-4 inline-flex items-center gap-2 font-bold shadow-2xl relative z-10 transform hover:scale-105 transition-all">
                  Contact Us Now
                  <Phone className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-secondary-light to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 text-8xl">🍲</div>
          <div className="absolute bottom-10 right-20 text-8xl">🥗</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Let's Talk About Your Requirements
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-white drop-shadow">
            Whether you need grocery pulses, frozen vegetables & fruits, or delicious samosas and processed foods - we've got you covered with bulk quantities and doorstep delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-secondary hover:bg-accent hover:text-white text-lg px-10 py-5 font-bold shadow-2xl transform hover:scale-105 transition-all">
              Get in Touch
              <Phone className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn text-lg px-10 py-5 bg-primary text-white hover:bg-primary-dark font-bold shadow-2xl transform hover:scale-105 transition-all">
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
