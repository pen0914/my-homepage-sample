import { useCallback, useState } from 'react';

export const useSortData = () => {
  const [sortData, setSortData] = useState([]);
  const DoSort = useCallback((props) => {
    const { category, items } = props;
    const sortArray = items.filter(
      (item) => item.category.first === category
    );
    setSortData(sortArray);
  }, []);
  return { sortData, DoSort };
};
