import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetailLayout } from '../orgnisms/ItemDetailLayout';
import { ItemContext } from '../providers/ItemProvider';

export const ItemDetail = memo(() => {
  //データを取得
  const items = React.useContext(ItemContext);

  //useParamsでclickから渡されたpartNumberを取り出す
  const params = useParams();
  const partNumber = params.clickNumber;

  //同じpartNumberを持つデータのみを取り出す
  const res = items.find(
    (items) => items.partNumber === partNumber
  );

  return <ItemDetailLayout res={res} />;
});
