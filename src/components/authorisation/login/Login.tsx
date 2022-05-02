import React, {FC} from 'react';
import Form from './form/Form';
import './Login.css';

const Login: FC = (): JSX.Element => {
  return (
    <section className='authorisation'>
      <Form/>
    </section>
  );
};

export default Login;