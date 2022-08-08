import styled from 'styled-components/macro';

import Button from '../Button';
import Link from '../Link';

import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUsername, logOut } from '../../../store/slices/authSlice';
import { useLogoutMutation } from '../../../store/api/authEndpoints';

const Buttons = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const username = useSelector(selectCurrentUsername);

  const onLogout = async () => {
    try {
      await logout(null).unwrap();
      dispatch(logOut(null));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ButtonsWrapper>
      {!username ? (
        <>
          <Link to='/'>Calculator</Link>
          <Link to='/register'>Join Now</Link>
        </>
      ) : (
        <Button type='button' onClick={onLogout}>
          Logout
        </Button>
      )}
    </ButtonsWrapper>
  );
};

export default Buttons;

const ButtonsWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button} {
    margin: 0.4rem 0 0.8rem 0;
    padding: 0.4rem 0.8rem;
  }
  ${Link} {
    margin: 0.4rem 0 0.8rem 0;
    padding: 0.4rem 0.8rem;
  }
`;
