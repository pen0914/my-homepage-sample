import React, { memo } from 'react';
import styled from 'styled-components';

export const Drawer = memo((props) => {
  const { active } = props;

  return (
    <SDiv active={active}>
      <SNav>
        <SUl>
          <SL>
            <SButton active={active}>ホーム</SButton>
          </SL>
          <SL>
            <SButton active={active}>カテゴリー</SButton>
          </SL>
          <SL>
            <SButton active={active}>ご利用ガイド</SButton>
          </SL>
          <SL>
            <SButton active={active}>お問い合わせ</SButton>
          </SL>
          <SL>
            <SButton active={active}>
              よくあるご質問
            </SButton>
          </SL>
          <SL>
            <SButton active={active}>
              プライバシーポリシー
            </SButton>
          </SL>
          <SL>
            <SButton active={active}>
              特定商取引法に基づく表示
            </SButton>
          </SL>
        </SUl>
      </SNav>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    width: 100%;
    @media not all and (max-width: 600px) {
      display: flex;
    }
  }
`;

const SNav = styled.nav`
  && {
    text-align: center;
    background-color: #333537;

    @media (max-width: 600px) {
      background-color: rgba(51, 53, 55, 0.9);
    }
  }
`;

const SUl = styled.ul`
  && {
    padding-left: 0;
    margin: 0;
  }
`;

const SL = styled.li`
  && {
    list-style: none;
    border-bottom: 1px solid #6d6d6d;
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
