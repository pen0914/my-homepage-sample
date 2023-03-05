import React, { memo, useState } from 'react';
import styled from 'styled-components';

export const Drawer = memo((props) => {
  const { active } = props;

  return (
    <SDiv active={active}>
      <SNav active={active}>
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
    width: 30%;
    margin-top: 0;
  }
`;

const SNav = styled.nav`
  && {
    /* width: ${(props) =>
      props.active ? '100%' : '0'}; */
    display: ${(props) => (props.active ? '' : 'none')};
    text-align:center;
    background-color:rgba(51, 53, 55, 0.9);
    height:100vh;
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
    font-weight: bold;
  }
`;
