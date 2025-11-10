'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/lib/store'

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Westend Corporation
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Quote Cart */}
          <Link
            href="/quote-cart"
            className="relative flex items-center gap-2 btn btn-primary"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Quote Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
