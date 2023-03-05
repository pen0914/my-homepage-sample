import React, { memo, useState } from 'react';
import styled from 'styled-components';

export const Drawer = memo((props) => {
  const { active } = props;

  return (
    <SDiv active={active}>
      <SNav active={active}>
        <SUl>
          <SL>
            <button>ホーム</button>
          </SL>
          <SL>
            <button>カテゴリー</button>
          </SL>
          <SL>
            <button>ご利用ガイド</button>
          </SL>
          <SL>
            <button>お問い合わせ</button>
          </SL>
          <SL>
            <button>よくあるご質問</button>
          </SL>
          <SL>
            <button>プライバシーポリシー</button>
          </SL>
          <SL>
            <button>特定商取引法に基づく表示</button>
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
    display: ${(props) => (props.active ? 'none' : '')};
    text-align:center;
    background-color:red;
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
  }
`;
