import { useCallback, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const PositionUp = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  return { scrollPosition, PositionUp };
};
