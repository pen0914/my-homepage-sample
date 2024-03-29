import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMeasure } from '../../../hooks/useMeasure';
import { DetailList } from '../detail/DetailList';

export const ItemDetailLayout = memo((props) => {
  const { res } = props;
  const history = useHistory();
  const [count, setCount] = useState(0);
  // const [size, setSize] = useState(0);
  const { MeasureImage, width } = useMeasure();

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

  //画像スライドのカウント　↓↓
  const onClickUp = () => {
    if (count < 2) {
      let total = count + 1;
      setCount(total);
    }
  };

  const onClickDown = () => {
    if (count > 0) {
      let total = count - 1;
      setCount(total);
    }
  };
  //                    ↑↑

  useEffect(() => {
    //windowサイズ変更毎にレンダリングしたい
    // let windowWidth = window.innerWidth;
    // setSize(windowWidth);
    MeasureImage(res.id);
  }, [MeasureImage]);

  //詳細ページを返す
  return (
    <SDiv>
      <SPic>
        <SSlider>
          <SImageMoveButton onClick={onClickDown}>
            ＜
          </SImageMoveButton>
          <SSLiderFrame count={count} width={width}>
            <SImage
              id={res.id}
              alt={res.id}
              src={res.image}
            />
            <SImage2 alt={res.id} src={res.image} />
            <SImage alt={res.id} src={res.image} />
          </SSLiderFrame>
          <SImageMoveButton onClick={onClickUp}>
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
          <DetailList
            category={res.brand}
            heading={'brand'}
          />

          <DetailList
            category={res.detail}
            heading={'detail'}
          />
          <DetailList
            category={res.size}
            heading={'size'}
          />
          <DetailList
            category={res.condition}
            heading={'condition'}
          />
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
    margin: 0 auto;
    text-align: center;
    border-bottom: solid 2px rgba(51, 53, 55, 0.9);
    @media (min-width: 600px) {
      width: 60%;
    }

    @media (max-width: 600px) {
      height: 200px;
    }
  }
`;

const SSlider = styled.div`
  && {
    display: flex;

    margin: 0 auto;
    overflow-x: hidden;
    @media (min-width: 600px) {
      width: 60%;
    }
    @media (max-width: 600px) {
      height: 100%;
    }
  }
`;

const SImageMoveButton = styled.button`
  && {
    z-index: 5;
    background-color: #e0e0e0;
    font-size: 20px;
    font-weight: bold;
    border: none;
  }
`;

const SSLiderFrame = styled.div`
  && {
    display: flex;
    position: relative;
    right: calc(${(props) => props.count * props.width}px);
    transition: 0.5s 0s ease-in-out;
    @media (max-width: 600px) {
      width: 200px;
      margin: 0 auto;
    }
  }
`;

const SImage = styled.img`
  && {
    display: block;
    width: 100%;
    mix-blend-mode: multiply;
  }
`;

const SImage2 = styled.img`
  && {
    display: block;
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
