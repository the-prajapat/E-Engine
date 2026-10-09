import React, { useState, useEffect } from 'react';
import {
  fetchUserDetails,
  fetchProductCatalog,
} from '../backend-engine/api-integration/api-client.js';
import {
  HeaderBar,
  ProductCard,
  LoadingSkeleton,
  RetailLayout,
} from '../ui-ux-design/index.js';

/**
 * RetailHome (Smart Container Component)
 * STRICT ROLE:
 *   1. Automatically fetches data from /backend-engine/api-integration upon mount
 *   2. Manages state (loading, error, user, products, cart)
 *   3. Passes dynamic props down into dumb Stitch AI presentation components
 */
export default function RetailHome({ onSwitchToWholesale }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRetailData() {
      try {
        setLoading(true);
        const [userData, productList] = await Promise.all([
          fetchUserDetails('current'),
          fetchProductCatalog({ mode: 'retail' }),
        ]);

        if (isMounted) {
          setUser(userData);
          setProducts(productList || []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to connect to MCB backend service');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadRetailData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <RetailLayout
      header={
        <HeaderBar
          title="Retail Storefront"
          subtitle="B2C Instant Catalog • Dynamic MCB Feed"
          userName={user?.name || 'Guest'}
          itemCount={cartCount}
          activeMode="retail"
          onToggleMode={onSwitchToWholesale}
        />
      }
      banner={
        <div
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.9 }}>
              ⚡ HYPERLOCAL DISPATCH ACTIVE
            </span>
            <h2 style={{ margin: '0.3rem 0 0 0', fontSize: '1.4rem', fontWeight: 700 }}>
              Welcome back, {user?.name || 'Shopper'}
            </h2>
            <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.85rem', opacity: 0.85 }}>
              Connected to MCB Database Engine • Displaying verified retail inventory
            </p>
          </div>
        </div>
      }
    >
      {loading && <LoadingSkeleton count={4} message="Fetching latest retail catalog from MCB..." />}

      {error && (
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#b91c1c',
            borderRadius: '10px',
            marginBottom: '1rem',
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {!loading && !error && (
        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              Trending Retail Products ({products.length})
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Live Sync: MCB v1
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {products.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      )}
    </RetailLayout>
  );
}
