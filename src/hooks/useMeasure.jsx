import { useCallback, useState } from 'react';

export const useMeasure = () => {
  const [width, setWidth] = useState(0);

  const MeasureImage = useCallback((id) => {
    let image = document.getElementById(id);
    let Wid = image.width;

    setWidth(Wid);
  }, []);
  return { MeasureImage, width };
};
