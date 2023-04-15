import React, { memo } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ItemContext } from '../providers/ItemProvider';

import { ItemIcon } from '../orgnisms/ItemIcon';

export const Home = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

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
        {items.map((item) => {
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
