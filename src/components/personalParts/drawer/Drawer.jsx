import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryLink } from '../../commonParts/ui-materials/CategoryLink';

export const Drawer = memo((props) => {
  const { active } = props;


  return (
    <SDiv active={active}>
      <SNav>
        <SUl>
        <SLi>
            <SLink active={active} to="/">
              Home
            </SLink>
          </SLi>

          <SLi>
            <SCategoryLink name={'Outer'} />

            <SUl2>
              <SLi2>
                <SCategoryLink name={'light-outer'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'heavy-outer'} />
              </SLi2>
            </SUl2>
          </SLi>
          <SLi>
            <SCategoryLink name={'Tops'} />
            <SUl2>
              <SLi2>
                <SCategoryLink name={'t-shirt'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'vest'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'shirt'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'sweat'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'knit'} />
              </SLi2>
            </SUl2>
          </SLi>
          <SLi>
            <SCategoryLink name={'Bottoms'} />
            <SUl2>
              <SLi2>
                <SCategoryLink name={'pants'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'skirt'} />
              </SLi2>
            </SUl2>
          </SLi>
          <SLi>
            <SCategoryLink name={'Cap&Hat'} />
            <SUl2>
              <SLi2>
                <SCategoryLink name={'cap'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'hat'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'beanie'} />
              </SLi2>
            </SUl2>
          </SLi>
          <SLi>
            <SCategoryLink name={'Accessories'} />
            <SUl2>
              <SLi2>
                <SCategoryLink name={'ring'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'necklace'} />
              </SLi2>
              <SLi2>
                <SCategoryLink name={'pins'} />
              </SLi2>
            </SUl2>
          </SLi>
          <SLi>
            <SCategoryLink name={'Bag'} />
          </SLi>
        </SUl>
      </SNav>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    width: 100%;
    background-color: rgba(51, 53, 55, 0.9);
    height: 930px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const SNav = styled.nav`
  && {
    text-align: center;
  }
`;

const SUl = styled.ul`
  && {
    padding-left: 0;
    margin: 0;
  }
`;

const SLi = styled.li`
  && {
    list-style: none;
    border-bottom: 1px solid #6d6d6d;
  }
`;

const SUl2 = styled(SUl)`
  && {
    display: none;

    ${SLi}:hover & {
      display: inline;
    }
  }
`;

const SLi2 = styled(SL)`
  && {
    background-color: #333537;
  }
`;

const SLink = styled(Link)`
  && {
    text-decoration: none;
    background: transparent;
    color: white;
    
  }
`;

const SCategoryLink = styled(CategoryLink)`
  && {
  }
`;
