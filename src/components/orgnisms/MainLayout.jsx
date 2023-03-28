import styled from 'styled-components';

export const MainLayout = (props) => {
  const { children, active, position } = props;

  return (
    <>
      <SP />
      <SDiv active={active}>
        <Div1 active={active}>{children[0]}</Div1>
        <Div2 active={active} position={position}>
          {children[1]}
        </Div2>
      </SDiv>
    </>
  );
};

const SP = styled.p`
  && {
    height: 50px;
    @media (max-width: 600px) {
      height: 70px;
    }
    margin: 0;
  }
`;

const SDiv = styled.div`
  && {
    display: flex;
  }
`;

const Div1 = styled.div`
  && {
    @media all and (max-width: 600px) {
      position: fixed;
      width: 100%;
      inset: ${(props) => (props.active ? '0' : '')};
      overflow: ${(props) =>
        props.active ? 'hidden' : ''};
      transition: all 0.6s
        cubic-bezier(0.215, 0.61, 0.355, 1);
      top: ${(props) => (props.active ? '70px' : '-930px')};
      z-index: 5;
    }

    @media not all and (max-width: 600px) {
      display: flex;
      transition: all 0.6s
        cubic-bezier(0.215, 0.61, 0.355, 1);
      overflow-y: hidden;
      position: relative;
      left: ${(props) => (props.active ? '0' : '-60vh')};

      visibility: ${(props) =>
        props.active ? 'visible' : 'hidden'};
    }
  }
`;

const Div2 = styled.div`
  && {
    @media all and (max-width: 600px) {
      top: ${(props) =>
        props.active
          ? `${(props.position - 70) * -1}px`
          : ``};
      position: ${(props) => (props.active ? 'fixed' : '')};
    }
    @media not all and (max-width: 600px) {
      flex-basis: ${(props) => (props.active ? '75%' : '')};
    }
  }
`;
