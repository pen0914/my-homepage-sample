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
              <SDt>Outer</SDt>
              <SDd>light-outer</SDd>
              <SDd>heavy-outer</SDd>
            </SDl>
            <SDl>
              <SDt>Tops</SDt>
              <SDd>t-shirt</SDd>
              <SDd>vest</SDd>
              <SDd>shirt</SDd>
              <SDd>sweat</SDd>
              <SDd>knit</SDd>
            </SDl>
            <SDl>
              <SDt>Bottoms</SDt>
              <SDd>pants</SDd>
              <SDd>skirt</SDd>
            </SDl>
          </SMore>
        </SLi>
        <SLi>
          <h5>Goods</h5>
          <SMore>
            <SDl>
              <SDt>Cap&Hat</SDt>
              <SDd>cap</SDd>
              <SDd>hat</SDd>
              <SDd>beanie</SDd>
            </SDl>
            <SDl>
              <SDt>Shoes</SDt>
            </SDl>
            <SDl>
              <SDt>Accessory</SDt>
              <SDd>ring</SDd>
              <SDd>necklace</SDd>
              <SDd>pins</SDd>
            </SDl>
            <SDl>
              <SDt>Bag</SDt>
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
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
`;

const SUl = styled.ul`
  && {
    margin: 0 auto;
    padding: 0;
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
    :hover {
      color: rgb(254, 128, 2);
    }
  }
`;

const SMore = styled.div`
  && {
    display: none;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    height: 170px;

    background-color: #333537;
    ${SLi}:hover & {
      display: flex;
    }
  }
`;

const SDl = styled.dl`
  && {
    position: relative;
    margin: 10px 15px 0 15px;
    color: #e0e0e0;
    left: 30vw;
  }
`;

const SDd = styled.dd`
  && {
    margin-left: 0;
  }
`;

const SDt = styled.dt`
  && {
    font-weight: bold;
    :hover {
      color: rgb(254, 128, 2);
    }
  }
`;
