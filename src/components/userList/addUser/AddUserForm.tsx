import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import './AddUserForm.css';
import { addUser } from '../../../reducers/userReducer';
import { IUser } from '../../../interfaces/interfaces';

enum LengthLimit {
  maxLength = 100,
  minLength = 1
}
const AddUserForm: FC = (): JSX.Element => {
  const [valueName, setValueName] = useState('');
  const [valueNickname, setValueNickname] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const dispatch = useAppDispatch();

  const userCreate = (): IUser => {
    const newUser: IUser = {
      id: Date.now(),
      name: valueName,
      username: valueNickname,
      email: valueEmail
    };

    setValueName('');
    setValueNickname('');
    setValueEmail('');

    return newUser;
  };
    
  
  return (
    <form className='user-list__add-user-form'>
      <div className='user-list__input-info'>
        <input 
          value={valueName} 
          onInput={(event): void => {
            setValueName(event.currentTarget.value);
            event.currentTarget.value = '';
          }} 
          type="text" 
          placeholder='name' 
          required 
          minLength={LengthLimit.minLength} 
          maxLength={LengthLimit.maxLength}
        />
      </div>
      <div className='user-list__input-info'>
        <input
          value={valueNickname}
          onInput={(event): void => {
            setValueNickname(event.currentTarget.value);
            event.currentTarget.value = '';
          }} 
          type="text" 
          placeholder='nickname' 
          maxLength={LengthLimit.maxLength}
        />
      </div>
      <div className='user-list__input-info'>
        <input 
          value={valueEmail} 
          onInput={(event): void => {
            setValueEmail(event.currentTarget.value);
          }} 
          type="text" 
          placeholder='e_mail' 
          maxLength={LengthLimit.maxLength}
        />
      </div>
      <div className='user-list__add-user-button'>
        <button 
          type='submit' 
          onClick={(event): void | null => {
            event.preventDefault();

            if(
              valueName.trim() === '' 
              && valueNickname.trim() === '' 
              &&valueEmail.trim() === ''
            ) {
              return null;
            }
            const user: IUser = userCreate();
            dispatch(addUser(user));
          }}
        >add
        </button>
      </div>
    </form>
  );
      
};


export default AddUserForm;