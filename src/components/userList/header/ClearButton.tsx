import React, { FC } from 'react';
import './ClearButton.css';
import {resetUsers} from '../../../reducers/userReducer';
import { useAppDispatch } from '../../../app/hooks';

type Props = {
  clean: HTMLInputElement | null
  classArray: (string | null) []
}

const ClearButton: FC<Props> = (props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={(): void => { 
      if(props.clean){
        props.clean.value = '';
        props.clean.classList.remove('user-list__input_active');
        
        dispatch(resetUsers());
      }
    }} 
    className='user-list__clear-button'>&#215;</button>
  );
};

export default ClearButton;