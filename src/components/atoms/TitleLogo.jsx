import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const TitleLogo = memo((props) => {
  const { className } = props;
  return (
    <SWrapper className={className}>
      <STitleLink to="/">
        <SLogo
          alt="タイトル"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXr4NFrcbwWB-jGHn6ZP3AR20yFYLgNI7sDr4coQeQOsbXwjl-TLoNJ5dLp9aSQy6iqzXtiSsGSxNf1kOP_3lBnMXNlL6CeZra_n3M38XQ2t9EEa-u4ObN-UrkCVPRfELD8BqF7atrNgMRViUhUXgU3=w1061-h417-s-no?authuser=0"
        />
      </STitleLink>
    </SWrapper>
  );
});

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

const SLogo = styled.img`
  && {
    max-width: 100%;
    height: 100%;
    &:hover {
    }
  }
`;
