// components/HorizontalScroll.tsx
import React, { Suspense, lazy } from 'react';

// Define los tipos para las props
interface HorizontalScrollProps {
  listItems: React.JSX.Element[]; // Acepta un array de ReactNode
}

const HorizontalScroll: React.FC <HorizontalScrollProps> = ({ listItems }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap'}}>
        {listItems.map((item, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '1px', animation: 'scrollInfinite 10s linear infinite' }}>
            {item}
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default HorizontalScroll;
