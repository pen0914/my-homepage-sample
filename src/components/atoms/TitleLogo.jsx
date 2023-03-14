import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleLogo = () => {
  return (
    <SWrapper>
      <STitleLink to="/">ECサイト</STitleLink>
    </SWrapper>
  );
};

//タイトル部分のCSS
const SWrapper = styled.div`
  && {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
  }
`;

const STitleLink = styled(Link)`
  && {
    @media (max-width: 600px) {
    }
    text-decoration: none;
    font-size: 20px;
    color: white;
    font-family: 'Karla', sans-serif;
  }
`;
