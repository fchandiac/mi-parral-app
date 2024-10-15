// components/HorizontalScroll.tsx
'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';

interface HorizontalScrollProps {
  listItems: React.JSX.Element[]; // Acepta un array de ReactNode
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ listItems }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<React.JSX.Element[]>(listItems); // Inicializa con la lista completa
  const [isLoading, setIsLoading] = useState(false); // Controla el estado de carga

  // Efecto para manejar el scroll infinito
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Umbral de 100 píxeles antes de llegar al final del scroll
        if (scrollLeft >= scrollWidth - clientWidth - 100 && !isLoading) {
          setIsLoading(true); // Evitar múltiples disparos al mismo tiempo
          setTimeout(() => {
            // Simula carga al agregar los mismos elementos al final
            setItems((prevItems) => [...prevItems, ...listItems]);
            setIsLoading(false);
          }, 300); // Tiempo de espera antes de agregar más elementos
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
  }, [listItems, isLoading]);

  // Efecto para resetear la lista cuando los elementos cambian
  useEffect(() => {
    setItems(listItems); // Restablece a la lista original
  }, [listItems]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        ref={scrollRef}
        style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '1px' }}>
            {item}
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default HorizontalScroll;
