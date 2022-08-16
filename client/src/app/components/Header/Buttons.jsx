import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUsername, logOut } from '../../../state/authSlice';
import { useLogoutMutation } from '../../../api/authApi';

const Buttons = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const username = useSelector(selectCurrentUsername);

  const onLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(logOut());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ButtonsWrapper>
      {!username ? (
        <LinkElement to='/register'>Join</LinkElement>
      ) : (
        <>
          <LinkElement to='/profile'>Profile</LinkElement>
          <ButtonElement type='button' onClick={onLogout}>
            Logout
          </ButtonElement>
        </>
      )}
    </ButtonsWrapper>
  );
};

export default Buttons;

const ButtonsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkElement = styled(Link)`
  padding: 0.4rem 1.5rem;
  border-radius: 10px;
  background-color: #f2b524;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  border: 0.3rem solid #f2b524;
  margin-bottom: 1rem;

  &:hover {
    background-color: #414855;
    color: #f2b524;
    border: 0.3rem solid #f2b524;
  }
`;

const ButtonElement = styled.button`
  font-family: 'Optimus Princeps';
  padding: 0.4rem 1.2rem;
  border-radius: 10px;
  background-color: #f2b524;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  border: 0.3rem solid #f2b524;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #414855;
    color: #f2b524;
    border: 0.3rem solid #f2b524;
  }
`;
