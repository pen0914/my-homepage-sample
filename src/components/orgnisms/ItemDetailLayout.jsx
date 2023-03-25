import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

export const ItemDetailLayout = memo((props) => {
  const { res } = props;

  const history = useHistory();
  const [cart, setCart] = useState([]);

  //カートに品番を渡す

  const onClickCart = () => {
    setCart([...cart, res.partNumber]);

    //読み込み
    //cartページへ移動
    history.push({
      pathname: '../cart',
      state: { number: res.partNumber, cart: cart }
    });
    console.log(cart);
  };

  //詳細ページを返す
  return (
    <>
      <Spic>
        <Simage
          alt={res.name}
          src={res.image}
          width="400px"
        />
        <br />

        {res.name}
        <br />
        {res.price}
      </Spic>
      <div>
        <div>
          <button
            onClick={() => onClickCart(res.partNumber)}
          >
            カートに入れる
          </button>
        </div>
        <Sexplain>
          <Sbrand>
            <p>[brand]</p>
            <p>{res.brand}</p>
          </Sbrand>
          <Scategory>
            <p>[category]</p>
            <p>{res.category}</p>
          </Scategory>
          <Sdetail>
            <p>[detail]</p>
            <p>{res.detail}</p>
          </Sdetail>
          <Ssize>
            <p>[size]</p>
            <p>{res.size}</p>
          </Ssize>
          <Scondtion>
            <p>[condition]</p>
            <p>{res.condition}</p>
          </Scondtion>
        </Sexplain>
      </div>
    </>
  );
});

const Spic = styled.p`
  && {
    text-align: center;
  }
`;

const Simage = styled.img`
  && {
    display: inline-block;
  }
`;

const Sexplain = styled.div`
  && {
    font-family: 'Karla', sans-serif;
    font-size: 20px;
  }
`;

const Sbrand = styled.div`
  && {
  }
`;

const Scategory = styled.div`
  && {
  }
`;

const Sdetail = styled.div`
  && {
  }
`;

const Ssize = styled.div`
  && {
  }
`;

const Scondtion = styled.div``;
