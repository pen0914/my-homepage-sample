import React, { memo } from 'react';

import { useHistory } from 'react-router-dom';
import { ItemContext } from '../providers/ItemProvider';

import { HomeLayout } from '../orgnisms/HomeLayout';

export const Home = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

  //ページ遷移に要するhistoryを取得
  const history = useHistory();

  //アイテム画像からページ遷移する(idを渡す)
  const onClickPage = (partNumber) => {
    history.push({
      pathname: `select/${partNumber}`
    });
  };

  return (
    <>
      <HomeLayout items={items} onClickPage={onClickPage} />
    </>
  );
});
