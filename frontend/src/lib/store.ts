import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  productId: number
  productName: string
  productSlug: string
  quantity: number
  uom: string
  moq: number
  primaryImage: string
  notes?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateQuantity: (productId: number, quantity: number) => void
  updateNotes: (productId: number, notes: string) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find((i) => i.productId === item.productId)
        
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ items: [...items, item] })
        }
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        
        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        })
      },
      
      updateNotes: (productId, notes) => {
        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, notes } : item
          ),
        })
      },
      
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
        })
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'westendcorp-cart-storage',
    }
  )
)
