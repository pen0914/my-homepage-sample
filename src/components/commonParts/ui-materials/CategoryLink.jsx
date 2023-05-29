import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryLink = (props) => {
  const { name,className } = props;
  return (
    <SLink
      to={{
        pathname: '/',
        state: name
      }}
      className={className}
    >
      {name}
    </SLink>
  );
};

const SLink = styled(Link)`
  && {
    color: white;
    text-decoration: none;
    :hover {
      color: rgb(254, 128, 2);
    }
  }
`;
