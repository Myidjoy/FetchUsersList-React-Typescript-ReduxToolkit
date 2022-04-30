import React from 'react';

type Props = {
  name: string,
  active: boolean,
}

const Button = (props: Props): JSX.Element => {
  return (
    <li className={props.active ? 'user-list__button user-list__button_active' : 'user-list__button'}>
      <button>
        {props.name}
      </button>
    </li>
  );
};

export default Button;