/**
 * Category Filter Logic
 * Pure filtering utilities for multi-level catalog navigation.
 */

export function filterByCategory(items = [], categoryId) {
  if (!categoryId || categoryId === 'all') return items;
  return items.filter((item) => item.categoryId === categoryId || item.category === categoryId);
}
