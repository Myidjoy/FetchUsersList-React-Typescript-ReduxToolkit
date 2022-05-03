import React, { FC, useState, useRef, useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { deleteUser } from '../../../../reducers/userReducer';
import './NewUser.css';
import InputEdit from './InputEdit';

type Props = {
  name: string,
  username: string,
  email: string,
  id: number,
}

const NewUser: FC<Props> = (props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);
  const nickRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const [nameEdit, setNameEdit] = useState(false);
  const [nickNameEdit, setNickNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    
    if(nameRef.current && nameEdit){
      nameRef.current.focus(); 
      nameRef.current.value = props.name;
    }
  }, [nameEdit]);
  
  useEffect(() => {
    
    if(nickRef.current && nickNameEdit){
      nickRef.current.focus(); 
      nickRef.current.value = props.username;
    }
  }, [nickNameEdit]);
  useEffect(() => {
    
    if(mailRef.current && emailEdit){
      mailRef.current.focus(); 
      mailRef.current.value = props.email;
    }
  }, [emailEdit]);
  
  return (
    <li className='users-list__user'>
      <div 
        id='name' 
        onDoubleClick={(event): void => {
          event.stopPropagation();
          setNameEdit(true);    
        }}
        className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>name: </label>
        </div>
        <span  className={nameEdit ? 'user-list__text_disabled': ''}>
          {props.name}
        </span>
        <InputEdit 
          reference={nameRef}
          state={[nameEdit, setNameEdit]}
          newProps={{id: props.id, value: nameRef.current?.value, text: 'name'}}
        />
      </div>
      <div 
       
        onDoubleClick={(event): void => {
          event.stopPropagation();
          setNickNameEdit(true);    
        }}
        id='username' 
        className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>nickname: </label>
        </div>
        <span>{props.username}</span>
        <InputEdit 
          reference={nickRef}
          state={[nickNameEdit, setNickNameEdit]}
          newProps={{id: props.id, value: nickRef.current?.value, text: 'username'}}
        />
      </div>
      <div 
        onDoubleClick={(event): void => {
          event.stopPropagation();
          setEmailEdit(true);    
        }}
        id='email' 
        className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>email: </label>
        </div>
        <span>{props.email}</span>
        <InputEdit 
          reference={mailRef}
          state={[emailEdit, setEmailEdit]}
          newProps={{id: props.id, value: mailRef.current?.value, text: 'email'}}
        />
      </div>
      <div className="user-list__dell-button">
        <span onClick={(): void => {
          dispatch(deleteUser(props.id));
        }}>&#10006;</span>
      </div>
    </li>
  );
};

export default NewUser;