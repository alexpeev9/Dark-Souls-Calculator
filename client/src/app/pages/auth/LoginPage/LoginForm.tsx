import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useLoginMutation } from '../../../../store/api/authEndpoints';
import {
  selectCurrentUsername,
  setCredentials,
} from '../../../../store/slices/authSlice';
import Form from '../../../components/elements/Form';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Form/Input';
import {
  AttackTypeIcon,
  DurabilityIcon,
} from '../../../../assets/images/icons/stats';
import Link from '../../../components/elements/Link';
import styled from 'styled-components/macro';
import H2 from '../../../components/elements/H2';
import ErrorMsg from '../../../components/ErrorMsg';
import Loading from '../../../components/Loading';
import InputField from './InputField';
import errorHandler from '../../../utils/errorHandler';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const isLogged = useSelector(selectCurrentUsername);

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...(userData as any) }));
      navigate('/about');
    } catch (err: any) {
      setErrMsg(errorHandler(err));
    }
  };

  const handleUserInput = (e: any) => setUsername(e.target.value);

  const handlePwdInput = (e: any) => setPassword(e.target.value);

  return (
    <LoginWrapper>
      {!isLogged ? (
        <Form onSubmit={handleSubmit}>
          <H2>LOGIN:</H2>
          <InputField
            name='Username'
            value={username}
            type='text'
            onInputChange={handleUserInput}
            Icon={AttackTypeIcon}
          />

          <InputField
            name='Password'
            value={password}
            type='password'
            onInputChange={handlePwdInput}
            Icon={DurabilityIcon}
          />

          {errMsg ? <ErrorMsg>{errMsg}</ErrorMsg> : <></>}
          {isLoading ? (
            <Loading>...Loading</Loading>
          ) : (
            <>
              <Button type='submit'>Sign In</Button>
              <Link to='/register'>Register</Link>
            </>
          )}
        </Form>
      ) : (
        <></>
      )}
    </LoginWrapper>
  );
};

export default LoginForm;

const LoginWrapper = styled.section`
  width: min-content;
  background-color: ${(p) => p.theme.primary};
  opacity: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: max-content;
    align-items: normal;
  }

  ${Form} {
    width: min-content;
    border-radius: 1rem;
    margin: 0 0.9rem;
    @media only screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }

  ${H2} {
    color: ${(p) => p.theme.primary};
  }

  ${Button} {
    margin: 0.4rem 0 0.8rem 0;
    padding: 0.4rem 0.8rem;
  }

  ${Link} {
    padding: 0.4rem 0.8rem;
  }

  ${Loading} {
    padding: 0.4rem 0.8rem;
    margin: 0.4rem 0 0.8rem 0;
  }
  ${Input} {
    text-align: left;
    padding-left: 0.5rem;
  }
`;
