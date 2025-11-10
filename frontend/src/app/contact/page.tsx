import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Let's discuss your bulk frozen food requirements
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow">
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
                  
                  <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow">
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
                  
                  <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                      <p className="text-neutral-700">
                        Westend Corporation<br />
                        Serving Nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow">
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
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-10 shadow-2xl">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
                  <p className="text-lg mb-6 text-white/90">
                    Contact us today to discuss your bulk frozen food requirements. Our team is ready to help you with:
                  </p>
                  <ul className="space-y-2 mb-8 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Bulk quantity pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Delivery scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Custom requirements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span>
                      <span>Product recommendations</span>
                    </li>
                  </ul>
                  <a href="tel:+1234567890" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4 inline-flex items-center gap-2">
                    Call Now
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <div className="bg-neutral-50 rounded-3xl p-10 border-2 border-neutral-200">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Browse Our Products</h3>
                  <p className="text-neutral-600 mb-6 text-lg">
                    Explore our range of grocery pulses, frozen vegetables & fruits, and delicious samosas before getting in touch.
                  </p>
                  <a href="/products" className="btn btn-primary text-lg px-8 py-4">
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
