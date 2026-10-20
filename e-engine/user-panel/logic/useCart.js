import { useState, useCallback, useMemo } from 'react';

/**
 * useCart Hook — /e-engine/user-panel/logic/useCart.js
 * Encapsulates User Panel cart state, calculations, and mutations.
 */
export function useCart(initialItems = {}) {
  const [cartItems, setCartItems] = useState(initialItems);

  const updateQuantity = useCallback((product, newQty) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (!product || !product.id) return next;

      if (newQty <= 0) {
        delete next[product.id];
      } else {
        next[product.id] = {
          ...product,
          quantity: newQty,
        };
      }
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems({});
  }, []);

  const totalCartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    );
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return Object.values(cartItems).reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
      0
    );
  }, [cartItems]);

  const taxAmount = useMemo(() => Math.round(subtotal * 0.18), [subtotal]);
  const finalTotal = useMemo(() => subtotal + taxAmount, [subtotal, taxAmount]);

  return {
    cartItems,
    totalCartCount,
    subtotal,
    taxAmount,
    finalTotal,
    updateQuantity,
    clearCart,
  };
}
