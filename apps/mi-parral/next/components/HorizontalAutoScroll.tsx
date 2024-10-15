// components/HorizontalAutoScroll.tsx
'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';

interface HorizontalScrollProps {
  listItems: React.JSX.Element[];
}

const HorizontalAutoScroll: React.FC<HorizontalScrollProps> = ({ listItems }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<React.JSX.Element[]>(listItems);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para manejar el auto-scroll lento
  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // Desplaza 1 píxel cada vez para un movimiento lento
      }
    };

    const intervalId = setInterval(autoScroll, 60); // Ajusta el tiempo para controlar la velocidad del scroll

    return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta el componente
  }, []);

  // Efecto para manejar el scroll infinito
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Umbral de 100 píxeles antes de llegar al final del scroll
        if (scrollLeft >= scrollWidth - clientWidth - 100 && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setItems((prevItems) => [...prevItems, ...listItems]);
            setIsLoading(false);
          }, 300); // Simula un retraso de carga
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
    setItems(listItems);
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

export default HorizontalAutoScroll;

