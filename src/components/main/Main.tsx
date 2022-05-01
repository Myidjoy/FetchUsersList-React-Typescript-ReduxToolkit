import React, {FC} from 'react';
import { useAppSelector } from '../../app/hooks';
import Login from '../authorisation/login/Login';
import UserList from '../userList/UserList';
import './Main.css';

const Main: FC = (): JSX.Element => {
  const {status} = useAppSelector(state => state.users);
  return (
    <main className='main'>
      {status !== 'succeeded'
        ? <Login/>: null
      }
      <UserList/>
    </main>
  );
};

export default Main;