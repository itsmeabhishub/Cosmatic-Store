"use client";
import React, { createContext, useContext, useEffect, useReducer, ReactNode } from "react";
import { CartItem, Product } from "@/types";

interface CartState {
  items: CartItem[];
  wishlist: string[];
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product; shade?: string; size?: string }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "TOGGLE_WISHLIST"; productId: string }
  | { type: "CLEAR_CART" }
  | { type: "INIT_CART"; state: CartState };

const initialState: CartState = { items: [], wishlist: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(i => i.product.id === action.product.id);
      if (existing) {
        return { ...state, items: state.items.map(i => i.product.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i) };
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: 1, selectedShade: action.shade, selectedSize: action.size }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter(i => i.product.id !== action.productId) };
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) return { ...state, items: state.items.filter(i => i.product.id !== action.productId) };
      return { ...state, items: state.items.map(i => i.product.id === action.productId ? { ...i, quantity: action.quantity } : i) };
    case "TOGGLE_WISHLIST":
      return { ...state, wishlist: state.wishlist.includes(action.productId) ? state.wishlist.filter(id => id !== action.productId) : [...state.wishlist, action.productId] };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "INIT_CART":
      return action.state;
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  cartCount: number;
  cartTotal: number;
  isInWishlist: (id: string) => boolean;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window === "undefined") return initialState;
    try {
      const stored = window.localStorage.getItem("glamCart");
      return stored ? JSON.parse(stored) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("glamCart", JSON.stringify(state));
  }, [state]);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const isInWishlist = (id: string) => state.wishlist.includes(id);
  const isInCart = (id: string) => state.items.some(i => i.product.id === id);
  return <CartContext.Provider value={{ state, dispatch, cartCount, cartTotal, isInWishlist, isInCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
