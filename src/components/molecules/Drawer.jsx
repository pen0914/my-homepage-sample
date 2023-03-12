import React, { memo } from 'react';
import styled from 'styled-components';

export const Drawer = memo((props) => {
  const { active } = props;

  return (
    <SDiv active={active}>
      <SNav>
        <SUl>
          <SL>
            <SButton>ホーム</SButton>
          </SL>
          <SL>
            <SButton>カテゴリー</SButton>
          </SL>
          <SL>
            <SButton>ご利用ガイド</SButton>
          </SL>
          <SL>
            <SButton>お問い合わせ</SButton>
          </SL>
          <SL>
            <SButton>よくあるご質問</SButton>
          </SL>
          <SL>
            <SButton>プライバシーポリシー</SButton>
          </SL>
          <SL>
            <SButton>特定商取引法に基づく表示</SButton>
          </SL>
        </SUl>
      </SNav>
    </SDiv>
  );
});

const SDiv = styled.div`
  && {
    width: 50vh;
    height: 100vh;
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
  }
`;
