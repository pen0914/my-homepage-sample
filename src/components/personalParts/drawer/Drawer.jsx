import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Drawer = memo((props) => {
  const { active } = props;
  const [ca, setCa] = useState(false);

  const onClickCategory = () => {
    setCa(!ca);
  };

  return (
    <SDiv active={active}>
      <SNav>
        <SUl>
          <SL>
            <SLink active={active} to="/">
              ホーム
            </SLink>
          </SL>
          <SL>
            <SButton
              active={active}
              onClick={onClickCategory}
            >
              カテゴリー
            </SButton>
            <SUlx ca={ca}>
              <SLx>
                <SLinkx ca={ca} to="/">
                  Tops
                </SLinkx>
              </SLx>
              <SLx>
                <SLinkx ca={ca} to="/">
                  Pants
                </SLinkx>
              </SLx>
              <SLx>
                <SLinkx ca={ca} to="/">
                  Outer
                </SLinkx>
              </SLx>
              <SLx>
                <SLinkx ca={ca} to="/">
                  Headwear
                </SLinkx>
              </SLx>
              <SLx>
                <SLinkx ca={ca} to="/">
                  Accessories
                </SLinkx>
              </SLx>
            </SUlx>
          </SL>
          <SL>
            <SLink active={active} to="/">
              ご利用ガイド
            </SLink>
          </SL>
          <SL>
            <SLink active={active} to="/">
              お問い合わせ
            </SLink>
          </SL>
          <SL>
            <SLink active={active} to="/">
              よくあるご質問
            </SLink>
          </SL>
          <SL>
            <SLink active={active} to="/">
              プライバシーポリシー
            </SLink>
          </SL>
          <SL>
            <SLink to="/" active={active}>
              特定商取引法に基づく表示
            </SLink>
          </SL>
        </SUl>
      </SNav>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    width: 100%;

    /* @media not all and (max-width: 600px) {
      display: flex;
      background-color: #333537;
    } */

    background-color: rgba(51, 53, 55, 0.9);
    height: 930px;
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

const SUlx = styled(SUl)`
  && {
    display: ${(props) => (props.ca ? '' : 'none')};
  }
`;

const SL = styled.li`
  && {
    list-style: none;
    border-bottom: 1px solid #6d6d6d;
  }
`;

const SLx = styled(SL)`
  && {
    background-color: #333537;
  }
`;

const SLink = styled(Link)`
  && {
    text-decoration: none;
    background: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    transition: ${(props) =>
      props.active && 'opacity 3s ease-out'};
    opacity: ${(props) => (props.active ? '1' : '0')};
  }
`;

const SButton = styled.button`
  && {
    border: none;
    background: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    transition: ${(props) =>
      props.active && 'opacity 3s ease-out'};
    opacity: ${(props) => (props.active ? '1' : '0')};
  }
`;

const SLinkx = styled(SLink)`
  && {
    transition: ${(props) =>
      props.ca && 'opacity 3s ease-out'};
    opacity: ${(props) => (props.ca ? '1' : '0')};
  }
`;