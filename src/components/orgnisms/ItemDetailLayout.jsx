import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

export const ItemDetailLayout = memo((props) => {
  const { res } = props;
  const history = useHistory();

  //カートに品番を渡す

  const onClickCart = () => {
    const json = localStorage.getItem('array');
    const Cart = JSON.parse(json);
    if (!!Cart) {
      const newData = [...Cart, res.partNumber];
      localStorage.setItem(
        'array',
        JSON.stringify(newData)
      );
    } else {
      localStorage.setItem(
        'array',
        JSON.stringify([res.partNumber])
      );
    }

    //読み込み
    //cartページへ移動

    history.push('../cart');
  };

  //詳細ページを返す
  return (
    <SDiv>
      <SPic>
        <Simage alt={res.name} src={res.image} />
        <br />

        {res.name}
        <br />
        {res.price}
      </SPic>
      <div>
        <div>
          <SButton
            onClick={() => onClickCart(res.partNumber)}
          >
            カートに入れる
          </SButton>
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
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    margin: 0;
    padding: 0;
  }
`;

const SPic = styled.p`
  && {
    text-align: center;
    border-bottom: solid 2px rgba(51, 53, 55, 0.9);
  }
`;

const Simage = styled.img`
  && {
    display: inline-block;
    width: 55%;
  }
`;

const SButton = styled.button`
  && {
    background-color: #59b9c6;
  }
`;

const Sexplain = styled.div`
  && {
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    margin: 0 auto;
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
