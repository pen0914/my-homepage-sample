import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryLink = (props) => {
  const { name } = props;
  return (
    <SLink
      to={{
        pathname: '/',
        state: name
      }}
    >
      {name}
    </SLink>
  );
};

const SLink = styled(Link)`
  && {
    color: white;
  }
`;
