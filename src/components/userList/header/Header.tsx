import React, {FC} from 'react';
import './Header.css';


const Header: FC = (): JSX.Element => {
  return (
    <header className='user-list__header'>
      <div className='user-list__input'>
        <input id='find'></input>
        <label htmlFor='find'>Find users</label>
      </div>
    </header>
  );
};

export default Header;