// components/HorizontalScroll.tsx
'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';

// Define los tipos para las props
interface HorizontalScrollProps {
  listItems: React.JSX.Element[]; // Acepta un array de ReactNode
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ listItems }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<React.JSX.Element[]>([]); // Iniciar vacío

  // Efecto para reiniciar visibleItems cuando listItems cambia
  useEffect(() => {
    // Resetear visibleItems y hacer un efecto visual (ej: desplazamiento al inicio)
    setVisibleItems([]); // Reiniciar a cero
    setTimeout(() => {
      setVisibleItems(listItems); // Llenar con nuevos elementos después de un breve retraso
    }, 100); // Retraso para ver el efecto de reinicio
  }, [listItems]);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;

        // Cuando el usuario se acerca al final, agrega más elementos
        if (scrollLeft >= scrollWidth - clientWidth - 100) { // Umbral de 100 píxeles
          setVisibleItems((prevItems) => [...prevItems, ...listItems]); // Agrega más elementos
        }
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [listItems]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        ref={scrollRef}
        style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}
      >
        {visibleItems.map((item, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '1px' }}>
            {item}
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default HorizontalScroll;
