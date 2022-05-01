import React, { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { changeFindAttribute } from '../../../reducers/userReducer';
import './Button.css';

type Props = {
  name: string,
  active: boolean,
}

const Button: FC<Props> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <li className={props.active ? 'user-list__button user-list__button_active' : 'user-list__button'}>
      <button onClick={(): void => {
        dispatch(changeFindAttribute(props.name));
      }}>
        {props.name}
      </button>
    </li>
  );
};

export default Button;