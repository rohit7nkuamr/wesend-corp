import { Snowflake, Truck, Shield, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero - Glassmorphism */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-amber-200 via-green-200 to-orange-200 py-20">
        {/* Background Food Elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 text-[150px] animate-pulse">🏢</div>
          <div className="absolute bottom-10 right-10 text-[150px] animate-pulse" style={{animationDelay: '1s'}}>🤝</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/25 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Westend Corporation</h1>
              <p className="text-lg md:text-xl text-white">
                Your trusted partner for premium frozen food bulk orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-[120px]">📦</div>
          <div className="absolute bottom-20 left-20 text-[120px]">✨</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-xl mb-8">
              <p className="text-xl text-primary font-semibold leading-relaxed">
                We specialize in delivering premium quality grocery & staples (pulses, wheat, rice, flour), frozen vegetables & fruits, and delicious processed foods like samosas 
                directly to your doorstep in bulk quantities.
              </p>
            </div>
              
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
                <div className="w-14 h-14 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Cold Chain Excellence</h3>
                <p className="text-neutral-700 text-sm">
                  We maintain strict temperature control from -40°C to -18°C throughout storage and delivery, 
                  ensuring your frozen products arrive in perfect condition.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
                <div className="w-14 h-14 bg-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Doorstep Delivery</h3>
                <p className="text-neutral-700 text-sm">
                  Our temperature-controlled logistics ensure bulk orders reach you safely and on time, 
                  no matter the quantity.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
                <div className="w-14 h-14 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Quality Assurance</h3>
                <p className="text-neutral-700 text-sm">
                  Every product meets stringent quality standards with complete traceability and certifications 
                  for your peace of mind.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
                <div className="w-14 h-14 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Customer First</h3>
                <p className="text-neutral-700 text-sm">
                  We work closely with restaurants, hotels, caterers, and institutions to meet their specific 
                  bulk frozen food requirements.
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-xl mt-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">What We Offer</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌾</span>
                  <p className="text-neutral-700"><strong className="text-primary">Grocery & Staples:</strong> Pulses, wheat, rice, flour, and all essential grocery items in bulk quantities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🥦</span>
                  <p className="text-neutral-700"><strong className="text-secondary">Frozen Vegetables & Fruits:</strong> Farm-fresh peas, corn, berries, and more frozen at peak freshness</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🥟</span>
                  <p className="text-neutral-700"><strong className="text-accent">Processed Foods:</strong> Delicious samosas, spring rolls, cutlets, and other ready-to-cook items</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border-2 border-white shadow-xl mt-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Promise</h2>
              <p className="text-base text-neutral-700 leading-relaxed">
                At Westend Corporation, we're committed to making bulk frozen food ordering simple, reliable, and 
                convenient. Whether you're running a restaurant, hotel, catering service, or institution, we're here 
                to ensure you get the quality products you need, when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
