import React, { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { ButtonType } from '../../../types/types';
import Button from './Button';
import './FindParams.css';

const FindParams: FC = (): JSX.Element => {
  const {findAttribute} = useAppSelector(state => state.users);
  const buttons: ButtonType[] = [{id: 1,name: 'name', active: false}, {id: 2,name: 'nickname', active: false}, {id: 3,name: 'email', active: false}];

  buttons.forEach(button => {
    if(findAttribute === button.name) {
      button.active = true;
    } else {
      button.active = false;
    }
  });

  return (
    <ul className='user-list__parameters'>
      {buttons.map(button => <Button key={button.id} name={button.name} active={button.active}/>)}
    </ul>
  );
};

export default FindParams;