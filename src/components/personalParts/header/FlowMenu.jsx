import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { CategoryLink } from '../../commonParts/ui-materials/CategoryLink';

export const FlowMenu = (props) => {
  const { className } = props;
  const outer = ['light-outer', 'heavy-outer'];
  const tops = [
    't-shirt',
    'vest',
    'shirt',
    'sweat',
    'knit'
  ];
  const bottoms = ['pants', 'skirt'];
  const cap = ['cap', 'hat', 'beanie'];
  const accessory = ['ring', 'necklace', 'pins'];

  return (
    <SDiv className={className}>
      <SUl>
        <SLi>
          <h5>
            <SLink to="/">Home</SLink>
          </h5>
        </SLi>
        <SLi>
          <h5>Category</h5>
          <SMore>
            <SDl>
              <SDt>
                <CategoryLink name={'Outer'} />
              </SDt>
              {outer.map((outer) => {
                return (
                  <SDd key={outer}>
                    <CategoryLink name={outer} />
                  </SDd>
                );
              })}
            </SDl>
            <SDl>
              <SDt>
                <CategoryLink name={'Tops'} />
              </SDt>
              {tops.map((tops) => {
                return (
                  <SDd key={tops}>
                    <CategoryLink name={tops} />
                  </SDd>
                );
              })}
            </SDl>
            <SDl>
              <SDt>
                <CategoryLink name={'Bottoms'} />
              </SDt>
              {bottoms.map((bottoms) => {
                return (
                  <SDd key={bottoms}>
                    <CategoryLink name={bottoms} />
                  </SDd>
                );
              })}
            </SDl>
          </SMore>
        </SLi>
        <SLi>
          <h5>Goods</h5>
          <SMore>
            <SDl>
              <SDt>
                {' '}
                <CategoryLink name={'Cap&Hat'} />
              </SDt>
              {cap.map((cap) => {
                return (
                  <SDd key={cap}>
                    <CategoryLink name={cap} />
                  </SDd>
                );
              })}
            </SDl>
            <SDl>
              <SDt>
                <CategoryLink name={'Shoes'} />
              </SDt>
            </SDl>
            <SDl>
              <SDt>
                <CategoryLink name={'Accessory'} />
              </SDt>
              {accessory.map((ac) => {
                return (
                  <SDd key={ac}>
                    <CategoryLink name={ac} />
                  </SDd>
                );
              })}
            </SDl>
            <SDl>
              <SDt>
                <CategoryLink name={'Bag'} />
              </SDt>
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

const SLink = styled(Link)`
  && {
    color: white;
    text-decoration: none;
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
