import React, {FC, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import './Header.css';
import { filterInUsers } from '../../../reducers/userReducer';
import { IUser } from '../../../interfaces/interfaces';
import FindParams from './FindParams';


const Header: FC = (): JSX.Element => {
  const {users, findAttribute} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const classActive: (string| null)[] = [];

  value === ''
    ? classActive.length = 0:
    classActive.push('user-list__input_active');

  const searchUser = (value: string): void => {
    
    const result = (): IUser[] => {
      switch (findAttribute) {
      case 'nickname': 
        return  users.filter(user =>  user.username.toLowerCase().includes(value.toLowerCase()));

      case 'email': 
        return  users.filter(user =>  user.email.toLowerCase().includes(value.toLowerCase()));

      default:
        return  users.filter(user =>  user.name.toLowerCase().includes(value.toLowerCase()));
      }
        
    };
    const filtredUsers: IUser[] = result();

    dispatch(filterInUsers(filtredUsers));
  };

  return (
    <header className='user-list__header'>
      <div className='user-list__input-container'>
        <input 
          className={classActive.join('')}
          onChange={(event): void => {
            setValue(event.target.value);
            searchUser(event.target.value);
          }} 
          id='find'></input>
        <label htmlFor='find'>Find user</label>
      </div>
      <FindParams/>
    </header>
  );
};

export default Header;