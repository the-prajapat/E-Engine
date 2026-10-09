import React, { useState, useEffect } from 'react';
import {
  fetchUserDetails,
  fetchProjectList,
  fetchProductCatalog,
} from '../backend-engine/api-integration/api-client.js';
import {
  HeaderBar,
  ProjectCard,
  ProductCard,
  LoadingSkeleton,
  WholesaleLayout,
} from '../ui-ux-design/index.js';

/**
 * WholesaleHome (Smart Container Component)
 * STRICT ROLE:
 *   1. Automatically fetches project lists and B2B products from /backend-engine/api-integration
 *   2. Manages business user profile and state
 *   3. Passes dynamic props down into dumb Stitch AI presentation components
 */
export default function WholesaleHome({ onSwitchToRetail }) {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [wholesaleProducts, setWholesaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadWholesaleData() {
      try {
        setLoading(true);
        const [userData, projectData, catalogData] = await Promise.all([
          fetchUserDetails('current'),
          fetchProjectList(),
          fetchProductCatalog({ mode: 'wholesale' }),
        ]);

        if (isMounted) {
          setUser(userData);
          setProjects(projectData || []);
          setWholesaleProducts(catalogData || []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to connect to MCB Wholesale Engine');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadWholesaleData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <WholesaleLayout
      header={
        <HeaderBar
          title="B2B Wholesale Hub"
          subtitle={`GSTIN: ${user?.businessGstin || '08AAAAA0000A1Z5'} • Verified Enterprise`}
          userName={user?.name || 'Enterprise Merchant'}
          itemCount={wholesaleProducts.length}
          activeMode="wholesale"
          onToggleMode={onSwitchToRetail}
        />
      }
      sidebar={
        <div>
          <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase' }}>
            Enterprise Navigation
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <div
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                📊 Active Projects ({projects.length})
              </div>
            </li>
            <li>
              <div
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  color: '#334155',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                }}
              >
                📦 Bulk Catalog ({wholesaleProducts.length})
              </div>
            </li>
            <li>
              <div
                style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  color: '#334155',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                }}
              >
                🤝 Live Deal Room
              </div>
            </li>
          </ul>

          {selectedProject && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '0.85rem',
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                border: '1px solid #bfdbfe',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e40af' }}>
                SELECTED PROJECT
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '0.25rem', color: '#1e3a8a' }}>
                {selectedProject.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '0.2rem' }}>
                Budget: ₹{Number(selectedProject.budget).toLocaleString('en-IN')}
              </div>
            </div>
          )}
        </div>
      }
    >
      {loading && <LoadingSkeleton count={3} message="Syncing B2B Projects & Catalog from MCB..." />}

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Active Projects Section */}
          <section>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                Enterprise Project Portfolio
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.825rem', color: '#64748b' }}>
                Live projects automatically retrieved from MCB database engine
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1rem',
              }}
            >
              {projects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  onSelectProject={setSelectedProject}
                />
              ))}
            </div>
          </section>

          {/* Wholesale Bulk Products Section */}
          <section>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                Direct Manufacturer Wholesale Inventory
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.825rem', color: '#64748b' }}>
                Tiered pricing with minimum order quantities (MOQ)
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {wholesaleProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddToCart={(p) => alert(`B2B MOQ order initiated for: ${p.title}`)}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </WholesaleLayout>
  );
}
