import React, { FC } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import './NewUser.css';
import{ deleteUser } from '../../../../reducers/userReducer';

type Props = {
  name: string,
  username: string,
  email: string,
  id: number,
}

const NewUser: FC<Props> = (props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <li className='users-list__user'>
      <div className="">
        <div className="user-list__container-info">
          <label className='user-list__info'>name: </label>
        </div>
        <span>{props.name}</span>
      </div>
      <div className="">
        <div className="user-list__container-info">
          <label className='user-list__info'>nickname: </label>
        </div>
        <span>{props.username}</span>
      </div>
      <div className="">
        <div className="user-list__container-info">
          <label className='user-list__info'>email: </label>
        </div>
        <span>{props.email}</span>
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