import React from 'react';
import styled from 'styled-components';

export const FlowMenu = (props) => {
  const { className } = props;
  return (
    <SDiv className={className}>
      <SUl>
        <SLi>
          <h5>Home</h5>
        </SLi>
        <SLi>
          <h5>Category</h5>
          <SMore>
            <SDl>
              <dt>Outer</dt>
              <SDd>light-</SDd>
              <SDd>heavy-</SDd>
            </SDl>
            <SDl>
              <dt>Tops</dt>
              <SDd>t-shirt</SDd>
              <SDd>vest</SDd>
              <SDd>shirt</SDd>
              <SDd>sweat</SDd>
              <SDd>knit</SDd>
            </SDl>
            <SDl>
              <dt>Bottoms</dt>
              <SDd>pants</SDd>
              <SDd>skirt</SDd>
            </SDl>
          </SMore>
        </SLi>
        <SLi>
          <h5>Goods</h5>
          <SMore>
            <SDl>
              <dt>Cap&Hat</dt>
              <SDd>cap</SDd>
              <SDd>hat</SDd>
              <SDd>beanie</SDd>
            </SDl>
            <SDl>
              <dt>Shoes</dt>
            </SDl>
            <SDl>
              <dt>Accessory</dt>
              <SDd>ring</SDd>
              <SDd>necklace</SDd>
              <SDd>pins</SDd>
            </SDl>
            <SDl>
              <dt>Bag</dt>
            </SDl>
          </SMore>
        </SLi>
        <SLi>
          <h5>News</h5>
        </SLi>
        <SLi>
          <h5>About</h5>
        </SLi>
        <SLi>
          <h5>Like</h5>
        </SLi>
      </SUl>
    </SDiv>
  );
};

const SDiv = styled.div`
  && {
    margin: 0;
    position: relative;
    margin-left: 30px;
    margin-right: 10px;
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
`;

const SUl = styled.ul`
  && {
    margin: 0;
    display: flex;
  }
`;

const SLi = styled.li`
  && {
    list-style: none;
    height: 68px;
    margin: 0 5px;
    border: none;
    background-color: #333537;

    color: #e0e0e0;
  }
`;

const SMore = styled.div`
  && {
    display: none;
    width: 100vw;
    position: absolute;
    top: 70px;
    left: 0;
    height: 210px;
    background-color: gray;
    ${SLi}:hover & {
      display: flex;

      background-color: black;
    }
  }
`;

const SDl = styled.dl`
  && {
    margin: 20px 15px 0 15px;
  }
`;

const SDd = styled.dd`
  && {
    margin-left: 0;
  }
`;
