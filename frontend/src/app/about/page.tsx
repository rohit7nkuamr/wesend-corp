import { Snowflake, Truck, Shield, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Westend Corporation</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Your trusted partner for premium frozen food bulk orders
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl text-neutral-700 mb-8 leading-relaxed">
                We specialize in delivering premium quality grocery pulses, frozen vegetables & fruits, and delicious processed foods like samosas 
                directly to your doorstep in bulk quantities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Snowflake className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Cold Chain Excellence</h3>
                  <p className="text-neutral-600">
                    We maintain strict temperature control from -40°C to -18°C throughout storage and delivery, 
                    ensuring your frozen products arrive in perfect condition.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Doorstep Delivery</h3>
                  <p className="text-neutral-600">
                    Our temperature-controlled logistics ensure bulk orders reach you safely and on time, 
                    no matter the quantity.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Quality Assurance</h3>
                  <p className="text-neutral-600">
                    Every product meets stringent quality standards with complete traceability and certifications 
                    for your peace of mind.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Customer First</h3>
                  <p className="text-neutral-600">
                    We work closely with restaurants, hotels, caterers, and institutions to meet their specific 
                    bulk frozen food requirements.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-primary">What We Offer</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-2xl">🌾</span>
                  <p><strong>Grocery Pulses:</strong> Premium lentils, chickpeas, kidney beans, and more in bulk quantities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-2xl">🥦</span>
                  <p><strong>Frozen Vegetables & Fruits:</strong> Farm-fresh peas, corn, berries, and more frozen at peak freshness</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-2xl">🥟</span>
                  <p><strong>Processed Foods:</strong> Delicious samosas, spring rolls, cutlets, and other ready-to-cook items</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-10 mt-12">
                <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
                <p className="text-lg text-white/90">
                  At Westend Corporation, we're committed to making bulk frozen food ordering simple, reliable, and 
                  convenient. Whether you're running a restaurant, hotel, catering service, or institution, we're here 
                  to ensure you get the quality products you need, when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
