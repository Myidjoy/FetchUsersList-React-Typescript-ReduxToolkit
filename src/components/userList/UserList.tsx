import React, {FC} from 'react';
import Header from './header/Header';
import './UserList.css';


const UserList: FC = ():JSX.Element => {
  return (
    <section className='user-list'>
      <Header/>
    </section>  
  );
};

export default UserList;