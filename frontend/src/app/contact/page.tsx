import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero - Glassmorphism */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-amber-200 via-green-200 to-orange-200 py-20">
        {/* Background Food Elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 text-[150px] animate-pulse">📞</div>
          <div className="absolute bottom-10 right-10 text-[150px] animate-pulse" style={{animationDelay: '1s'}}>💬</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border-2 border-white shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get in Touch</h1>
              <p className="text-lg md:text-xl text-primary font-semibold">
                Let's discuss your bulk frozen food requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 text-[120px]">📧</div>
          <div className="absolute bottom-20 left-20 text-[120px]">🤝</div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all border border-white/60">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Call Us</h3>
                      <a href="tel:+1234567890" className="text-primary hover:underline text-lg">
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">Mon-Sat, 9 AM - 6 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all border border-white/60">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <a href="mailto:sales@westendcorp.com" className="text-primary hover:underline text-lg">
                        sales@westendcorp.com
                      </a>
                      <p className="text-sm text-neutral-600 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all border border-white/60">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                      <p className="text-neutral-700">
                        Westend Corporation<br />
                        Serving Nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-lg rounded-2xl hover:shadow-xl transition-all border border-white/60">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                      <p className="text-neutral-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Cards */}
              <div className="space-y-6 relative z-10">
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl border-2 border-white">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Order?</h3>
                  <p className="text-base mb-6 text-neutral-700">
                    Contact us today to discuss your bulk frozen food requirements. Our team is ready to help you with:
                  </p>
                  <ul className="space-y-2 mb-8 text-neutral-700">
                    <li className="flex items-center gap-2">
                      <span className="text-secondary text-xl font-bold">✓</span>
                      <span>Bulk quantity pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary text-xl font-bold">✓</span>
                      <span>Delivery scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary text-xl font-bold">✓</span>
                      <span>Custom requirements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary text-xl font-bold">✓</span>
                      <span>Product recommendations</span>
                    </li>
                  </ul>
                  <a href="tel:+1234567890" className="btn bg-primary hover:bg-primary-light text-white text-base px-8 py-3 inline-flex items-center gap-2 font-bold rounded-lg shadow-lg">
                    Call Now
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-white shadow-xl">
                  <h3 className="text-xl font-bold mb-3 text-primary">Browse Our Products</h3>
                  <p className="text-neutral-700 mb-6 text-sm">
                    Explore our range of grocery & staples, frozen vegetables & fruits, and delicious processed foods before getting in touch.
                  </p>
                  <a href="/products" className="btn bg-secondary hover:bg-secondary-dark text-white text-base px-8 py-3 font-bold rounded-lg shadow-lg">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
