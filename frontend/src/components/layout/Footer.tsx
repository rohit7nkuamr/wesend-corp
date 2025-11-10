import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Westend Corporation</h3>
            <p className="text-secondary-light mb-4">
              Premium frozen food bulk orders delivered to your doorstep with unbroken cold chain integrity.
            </p>
            <div className="flex items-center gap-2 text-secondary-light mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Serving Nationwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-secondary-light hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote-cart" className="text-secondary-light hover:text-white transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Categories</h4>
            <ul className="space-y-2 text-secondary-light text-sm">
              <li>🌾 Grocery Pulses</li>
              <li>🥦 Frozen Vegetables & Fruits</li>
              <li>🥟 Processed Foods (Samosas)</li>
              <li>🚚 Doorstep Delivery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-secondary-light">
                <Mail className="w-4 h-4" />
                <a href="mailto:sales@westendcorp.com" className="hover:text-white transition-colors">
                  sales@westendcorp.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-secondary-light">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-secondary-light text-sm">
          <p>&copy; {currentYear} Westend Corporation. All rights reserved.</p>
          <p className="mt-2">
            Built with ❄️ for premium frozen food bulk orders
          </p>
        </div>
      </div>
    </footer>
  )
}
