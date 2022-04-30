import React, { useState } from 'react';
import InputForm from './input/InputForm';
import { Input } from '../../../../types/types';
import ButtonForm from './button/ButtonForm';
import './Form.css';
import Loading from './loading/Loading';
import { useAppSelector } from '../../../../app/hooks';


const Form = (): JSX.Element => {
  const {status} = useAppSelector(state => state.users); 

  const [loginState, setLoginState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const inputs: Input[] = [
    {id: 'login', type: 'text', required: true, placeholder: 'login', value: loginState},
    {id: 'password', type: 'password', required: true, placeholder: 'password', value: passwordState}
  ];

  const inputHelper = (type: string, value: string): void | null => {
    switch (type) {
    case 'text':
      setLoginState(value);
      break;
    case 'password':
      setPasswordState(value);
      break;  
    default:
      return null;
    }
    
  };
  return (
    <div className='authorisation__form'>
      {
        inputs.map(input => <InputForm 
          key={input.id} 
          setValue={inputHelper} 
          type={input.type} 
          required={input.required} 
          placeholder={input.placeholder}
          value={input.value}
        />)
      }
      <ButtonForm 
        setEmptyInput={[setLoginState, setPasswordState]}
        loginInput={loginState} 
        passwordInput={passwordState}
      />
      {status === 'loading' 
        ? <Loading/> :
        null
      }
    </div>
  );
};

export default Form;