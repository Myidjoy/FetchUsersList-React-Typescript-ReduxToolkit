import React, {FC} from 'react';
import { useAppSelector } from '../../../app/hooks';
import NewUser from './newUser/NewUser';

import './Users.css';


const Users: FC = (): JSX.Element => {
  const {users, searchingUsers} = useAppSelector(state => state.users);
  return (
    <ul className='users-list'>
      {
        users.length
          ? ((searchingUsers.length && searchingUsers)|| users).map(user =>( 
            <NewUser 
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username} 
              email={user.email}              
            />
          )):
          null
      }
    </ul>
  );
};

export default Users;