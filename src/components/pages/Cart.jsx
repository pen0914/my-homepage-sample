import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import { useLocation } from 'react-router-dom';
import { ItemContext } from '../providers/ItemProvider';

export const Cart = memo(() => {
  const items = React.useContext(ItemContext);
  // const location = useLocation();
  // const State = location.state;
  const [state, setState] = useState([]);

  //localデータ取得=>
  //新しいデータを配列に追加=>localに保存

  //local呼び出し=>
  const Json = localStorage.getItem('array');
  const display = JSON.parse(Json);
  console.log(display);

  //データ取得
  // const res = items.find(
  //   (items) => items.partNumber === State.number
  // );
  // }
  // localStorage.removeItem('number');

  // setState(Cart);
  // console.log(Cart);
  // console.log(state);

  return (
    <>
      <p>カートページです。</p>
      <div>{}</div>
      <p>表示されません。</p>
    </>
  );
});
