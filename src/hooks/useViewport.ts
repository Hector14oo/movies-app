'use client';

import { useState, useEffect } from 'react';

export function useViewport() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizer = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (!viewport.width) resizer();

    window.addEventListener('resize', resizer);

    return () => {
      window.removeEventListener('resize', resizer);
    };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewport;
}
