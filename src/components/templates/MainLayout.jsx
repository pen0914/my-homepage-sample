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
  && {
    display: flex;
  }
`;

const Div1 = styled.div`
  && {
   
    @media all and (max-width: 600px) {
      position: fixed;
      width:100%;
      inset: ${(props) => (props.active ? '0' : '')};
      /* overflow: ${(props) =>
        props.active ? 'auto' : ''}; */
      transition: all 0.6s
        cubic-bezier(0.215, 0.61, 0.355, 1);
      top: ${(props) => (props.active ? '30px' : '-100vh')};
      z-index: 5;
    }

    @media not all and (max-width: 600px) {
      display: flex;
      transition: all 0.6s
        cubic-bezier(0.215, 0.61, 0.355, 1);
      overflow-y: hidden;
      position: relative;
      left: ${(props) => (props.active ? '0' : '-40vh')};
      /* opacity: ${(props) =>
        props.active ? '1' : '0'}; */
      visibility: ${(props) =>
        props.active ? 'visible' : 'hidden'};
    }
  }
`;

const Div2 = styled.div`
  && {
    @media not all and (max-width: 600px) {
      flex-basis: ${(props) => (props.active ? '75%' : '')};
    }
  }
`;
