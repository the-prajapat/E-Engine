/**
 * Price Filter Logic
 * Pure filtering utilities for retail unit prices and wholesale tiered pricing.
 */

export function filterByPriceRange(items = [], minPrice = 0, maxPrice = Infinity) {
  return items.filter((item) => {
    const price = Number(item.price || item.unitPrice || 0);
    return price >= minPrice && price <= maxPrice;
  });
}
