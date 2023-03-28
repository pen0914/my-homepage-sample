import React from 'react';
import { ItemContext } from '../providers/ItemProvider';

export const CartItem = (props) => {
  const { display } = props;
  const items = React.useContext(ItemContext);
  //データ取得

  const res = items.find(
    (items) => items.partNumber === display
  );

  return (
    <div>
      <img src={res.image} />
    </div>
  );
};
