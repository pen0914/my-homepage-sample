import { useCallback, useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {

  const PositionUp = useCallback(() => {
    setScrollPosition(window.pageYOffset);

    // window.addEventListener('scroll', PositionUp);
    // PositionUp();

    // return () =>
    //   window.removeEventListener('scroll', PositionUp);
  }, []);
  // }, []);

  return { scrollPosition, PositionUp };
};
