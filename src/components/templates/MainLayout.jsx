import styled from 'styled-components';

export const MainLayout = (props) => {
  const { children, active } = props;
  return (
    <SDiv>
      <Div1 active={active}>{children[0]}</Div1>
      <Div2 active={active}>{children[1]}</Div2>
    </SDiv>
  );
};

const SDiv = styled.div`
  display: flex;
  height: 100vh;
`;

const Div1 = styled.div`
  && {
    flex-basis: ${(props) => (props.active ? '25%' : '0')};
    transform: translateX();
  }
`;

const Div2 = styled.div`
  && {
    flex-basis: ${(props) =>
      props.active ? '75%' : '100%'};
  }
`;
