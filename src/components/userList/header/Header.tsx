import React, {FC, useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import './Header.css';
import { filterInUsers } from '../../../reducers/userReducer';
import { IUser } from '../../../interfaces/interfaces';
import FindParams from './FindParams';
import ClearButton from './ClearButton';


const Header: FC = (): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);
  const {users, findAttribute} = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  const classActive: (string| null)[] = [];

  searchRef.current?.value.trim() === ''
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
          ref={searchRef}
          className={classActive.join('')}
          onChange={(): void => {
            if(searchRef.current){
              searchUser(searchRef.current.value);
            }            
          }} 
          id='find'></input>
        <label htmlFor='find'>Find user</label>
      </div>
      <FindParams/>
      <ClearButton clean={searchRef.current} classArray={classActive}/>
    </header>
  );
};

export default Header;