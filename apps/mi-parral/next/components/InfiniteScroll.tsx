// components/InfiniteScroll.tsx
import React, { useState, useEffect, useRef, useCallback, Suspense, lazy } from 'react';

// Carga el componente de forma diferida
const LazyServiceMiniCard = lazy(() => import('@/app/userApp/services/ui/ServiceMiniCard'));

interface InfiniteScrollProps {
  initialItems: number; // Número inicial de elementos
  loadMoreItems: () => Promise<number>; // Función para cargar más elementos
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ initialItems, loadMoreItems }) => {
  const [items, setItems] = useState<number[]>(Array.from({ length: initialItems }, (_, i) => i));
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) { // Detectar cuando está cerca del final
        loadMore();
      }
    }
  }, [loadMoreItems]);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newItems = await loadMoreItems();
      setItems(prevItems => [...prevItems, ...Array.from({ length: newItems }, (_, i) => prevItems.length + i)]);
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '10px',
        scrollSnapType: 'x mandatory',
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        {items.map(index => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              margin: '10px',
              width: '100px',
              height: '100px',
              backgroundColor: 'lightblue',
              scrollSnapAlign: 'start',
              animation: 'scrollInfinite 10s linear infinite',
            }}
          >
            <LazyServiceMiniCard id={`id-${index}`} name={`Name ${index}`} price={index * 10} />
          </div>
        ))}
      </Suspense>
      {loading && <div>Loading more items...</div>}
    </div>
  );
};

export default InfiniteScroll;
