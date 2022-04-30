import React from 'react';
import { ButtonType } from '../../../types/types';
import Button from './Button';
import './FindParams.css';

const FindParams = (): JSX.Element => {
  const buttons: ButtonType[] = [{id: 1,name: 'name', active: false}, {id: 2,name: 'nickname', active: false}, {id: 3,name: 'e_mail', active: false}];
  return (
    <ul className='user-list__parameters'>
      {buttons.map(button => <Button key={button.id} name={button.name} active={button.active}/>)}
    </ul>
  );
};

export default FindParams;