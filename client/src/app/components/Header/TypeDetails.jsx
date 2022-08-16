import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { selectTypeById } from '../../../api/typeApi';

const TypeDetails = ({ id, pathName }) => {
  const type = useSelector((state) => selectTypeById(state, id));

  const getClassActive = (id) => (pathName === id ? 'active' : null);

  return (
    <LinkElement to={`/${id}`} className={getClassActive(id)}>
      {type.name}
    </LinkElement>
  );
};

export default TypeDetails;

const LinkElement = styled(Link)`
  width: 9rem;
  display: block;
  color: black;
  margin: 0.1rem;
  padding: 1rem;
  border-radius: 20px;
  text-decoration: none;
  &.active {
    background-color: #414855;
    color: #f2b524;
  }
  &:hover:not(.active) {
    background-color: #414855;
    color: #f2b524;
  }

  @media only screen and (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 0.1rem 0;
    padding: 1rem 0;
  }
`;
