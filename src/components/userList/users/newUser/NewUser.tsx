import React, { FC, useState, useRef, useEffect } from 'react';
import './NewUser.css';

type Props = {
  name: string,
  username: string,
  email: string,
  id: number,
}

const NewUser: FC<Props> = (props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);

  const [edit, setEdit] = useState(false);
  const classActive = edit ? 'user-list__edit_active' : '';
  const classDisable = edit ? 'user-list__text_disabled': '';

  useEffect(() => {
    if(nameRef.current && edit){
      nameRef.current.focus(); 
    }
  }, [edit]);

  return (
    <li className='users-list__user'>
      <div className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>name: </label>
        </div>
        <span 
          className={classDisable}
          onDoubleClick={(): void => {
            setEdit(true);  
            
          }}>{props.name}</span>
        <input 
          ref={nameRef}
          id='input'
          onBlur={(): void => { 
            setEdit(false);
          }} className={classActive} />
      </div>
      <div className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>nickname: </label>
        </div>
        <span>{props.username}</span>
      </div>
      <div className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>email: </label>
        </div>
        <span>{props.email}</span>
      </div>
      <div className="user-list__dell-button">
        <span onClick={(): void => {
          console.log(1);
        }}>&#10006;</span>
      </div>
    </li>
  );
};

export default NewUser;