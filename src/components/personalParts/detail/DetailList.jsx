import React from 'react';
import styled from 'styled-components';

export const DetailList = (props) => {
  const { category, heading } = props;
  return (
    <SDiv>
      <p>[{heading}]</p>
      <p>{category}</p>
    </SDiv>
  );
};

const SDiv = styled.div`
  && {
  }
`;
