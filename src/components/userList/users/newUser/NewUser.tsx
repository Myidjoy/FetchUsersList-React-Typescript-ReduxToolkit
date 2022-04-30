import React, { FC } from 'react';
import './NewUser.css';

type Props = {
  name: string,
  username: string,
  email: string,
}

const NewUser: FC<Props> = (props): JSX.Element => {
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
    </li>
  );
};

export default NewUser;