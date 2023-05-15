import { Link } from 'react-router-dom';

export const CategoryLink = (props) => {
  const { name } = props;
  return (
    <Link
      to={{
        pathname: '/',
        state: name
      }}
    >
      {name}
    </Link>
  );
};
