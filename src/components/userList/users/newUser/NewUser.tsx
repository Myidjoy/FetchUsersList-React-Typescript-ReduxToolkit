import React, { FC, useState, useRef, useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { changeTextInUser, deleteUser} from '../../../../reducers/userReducer';
import './NewUser.css';

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
          // event.currentTarget.id
          setNameEdit(true);    
        }}
        className="users-list__wrapper">
        <div className="user-list__container-info">
          <label className='user-list__info'>name: </label>
        </div>
        <span  className={nameEdit ? 'user-list__text_disabled': ''}>
          {props.name}
        </span>
        <input 
          ref={nameRef}
          onKeyUp={(event): void => {
            if(event.key ==='Enter') {
              setNameEdit(false);    
            }
          }}
          onChange={(): void => {
            if(nameRef.current){
              dispatch(changeTextInUser({id: props.id, value: nameRef.current.value, text: 'name'}));
            }  
          }}
          onBlur={(): void => { 
            setNameEdit(false);
          }} 
          className={nameEdit ? 'user-list__edit_active': ''} />
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
        <input 
          ref={nickRef}
          onKeyUp={(event): void => {
            if(event.key ==='Enter') {
              setNickNameEdit(false);    
            }
          }}
          onChange={(): void => {
            if(nickRef.current){
              dispatch(changeTextInUser({id: props.id, value: nickRef.current.value, text: 'username'}));
            }  
          }}
          onBlur={(): void => { 
            setNickNameEdit(false);
          }} 
          className={nickNameEdit ? 'user-list__edit_active': ''} />
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
        <input 
          ref={mailRef}
          onKeyUp={(event): void => {
            if(event.key ==='Enter') {
              setEmailEdit(false);    
            }
          }}
          onChange={(): void => {
            if(mailRef.current){
              dispatch(changeTextInUser({id: props.id, value: mailRef.current.value, text: 'email'}));
            }  
          }}
          onBlur={(): void => { 
            setEmailEdit(false);
          }} 
          className={emailEdit ? 'user-list__edit_active': ''} />
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