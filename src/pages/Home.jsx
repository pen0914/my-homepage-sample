import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { ItemContext } from '../providers/ItemProvider';

import { ItemIcon } from '../components/personalParts/home/ItemIcon';
import { useSortData } from '../hooks/useSortData';

export const Home = memo(() => {
  const location = useLocation();
  const category = location.state;
  const { DoSort, sortData } = useSortData();
  console.log(category);
  //データを取得
  const items = React.useContext(ItemContext);

  //ソート
  useEffect(() => {
    if (category != null) {
      DoSort({ category, items });
    }
  }, [DoSort, category, items]);

  const mapItem = location.state != null ? sortData : items;

  //ページ遷移に要するhistoryを取得
  const history = useHistory();

  //アイテム画像からページ遷移する(idを渡す)
  const onClickPage = (id) => {
    history.push({
      pathname: `select/${id}`
    });
  };

  return (
    <>
      <br />
      <SitemContainer>
        {mapItem.map((item) => {
          return (
            <ItemIcon
              key={item.id}
              item={item}
              onClick={onClickPage}
              id={item.partNumber}
            />
          );
        })}
      </SitemContainer>
    </>
  );
});

const SitemContainer = styled.div`
  && {
    text-align: center;

    height: auto;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;
  }
`;
