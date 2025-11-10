'use client'

import { useCartStore } from '@/lib/store'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

export default function QuoteCartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Quote Cart</h1>
          <p className="text-lg text-neutral-600 mb-8">
            Your quote cart is empty. Add products to request a quote.
          </p>
          <Link href="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Quote Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {items.map((item) => (
              <div key={item.productId} className="p-6 border-b border-neutral-200 last:border-b-0">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.productName}</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      MOQ: {item.moq} {item.uom}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium">Quantity:</label>
                      <input
                        type="number"
                        min={item.moq}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                        className="input w-32"
                      />
                      <span className="text-sm text-neutral-600">{item.uom}</span>
                    </div>
                    
                    {item.quantity < item.moq && (
                      <p className="text-sm text-red-600 mt-2">
                        ⚠ Below minimum order quantity
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={clearCart}
            className="mt-4 text-red-600 hover:text-red-700 text-sm"
          >
            Clear Cart
          </button>
        </div>
        
        {/* Summary */}
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Quote Summary</h2>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Total Items:</span>
                <span className="font-semibold">{items.length}</span>
              </div>
            </div>
            
            <button className="btn btn-primary w-full">
              Request Quote
            </button>
            
            <p className="text-xs text-neutral-500 mt-4 text-center">
              Our team will contact you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
