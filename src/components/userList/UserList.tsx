import React, {FC} from 'react';
import AddUserForm from './addUser/AddUserForm';
import Header from './header/Header';
import './UserList.css';
import Users from './users/Users';


const UserList: FC = ():JSX.Element => {
  return (
    <section className='user-list'>
      <Header/>
      <AddUserForm/>
      <Users/>
    </section>  
  );
};

export default UserList;