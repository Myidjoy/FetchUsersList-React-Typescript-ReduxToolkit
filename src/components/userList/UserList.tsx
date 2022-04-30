import React, {FC} from 'react';
import Header from './header/Header';
import './UserList.css';
import Users from './users/Users';


const UserList: FC = ():JSX.Element => {
  return (
    <section className='user-list'>
      <Header/>
      <Users/>
    </section>  
  );
};

export default UserList;