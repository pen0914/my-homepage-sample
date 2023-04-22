import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import '../../styles.css';

export const ItemDetailLayout = memo((props) => {
  const { res } = props;
  const history = useHistory();
  const [way, setWay] = useState(0);

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

  const onClickMove = (boolean) => {
    setWay(boolean);
  };

  //詳細ページを返す
  return (
    <SDiv>
      <SPic>
        <SSlider>
          <SImageMoveButton
            onClick={() => onClickMove(false)}
          >
            ＜
          </SImageMoveButton>
          <SSLiderFrame moveWay={way}>
            <SImage alt={res.id} src={res.image} />
            <SImage2 alt={res.id} src={res.image} />
            <SImage alt={res.id} src={res.image} />
          </SSLiderFrame>
          <SImageMoveButton
            onClick={() => onClickMove(true)}
          >
            ＞
          </SImageMoveButton>
        </SSlider>

        <Stag>{res.name}</Stag>

        <Stag>{res.price}</Stag>
      </SPic>
      <SDetail>
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
      </SDetail>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    margin: 0;
    padding: 0;
  }
`;

const SPic = styled.div`
  && {
    width: 60%;
    margin: 0 auto;
    text-align: center;
    border-bottom: solid 2px rgba(51, 53, 55, 0.9);
  }
`;

const SSlider = styled.div`
  && {
    display: flex;
    width: 60%;
    margin: 0 auto;
    overflow-x: hidden;
  }
`;

const SImageMoveButton = styled.button`
  && {
    z-index: 5;
  }
`;

const SSLiderFrame = styled.div`
  && {
    display: flex;
    position: relative;
    right: ${(props) => (props.moveWay ? '-100%' : '100%')};
  }
`;

const SImage = styled.img`
  && {
    display: inline-block;
    width: 100%;
    mix-blend-mode: multiply;
  }
`;

const SImage2 = styled.img`
  && {
    display: inline-block;
    width: 100%;
    mix-blend-mode: multiply;
  }
`;

const Stag = styled.p`
  && {
    margin: 0;
  }
`;

const SDetail = styled.div`
  & {
    margin: 0 auto;
  }
`;

const SButton = styled.button`
  && {
    width: 157px;
    height: 30px;

    background-color: linear-gradient(
      145deg,
      #f0f0f0,
      #cacacaca
    );
    border-radius: 10px;
    box-shadow: 8px 8px 12px #898989, -8px -8px 12px #ffffff;
    border: none;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 8px #000000;
      color: black;
    }

    color: #898989;
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
