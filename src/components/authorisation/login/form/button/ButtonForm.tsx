import React, {FC}from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {fetchUsers} from '../../../../../reducers/userReducer';
import {changeValidate} from '../../../../../reducers/validateReducer';

type Props = {
  loginInput: string,
  passwordInput: string,
  setEmptyInput: Array<React.Dispatch<string>>
}
const ButtonForm: FC<Props> = (props): JSX.Element => {
  const {login , password} = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();
  const {loginInput, passwordInput, setEmptyInput} = props;

  const buttonHandler = (requestLogin: string, requestPassword: string): void => {
    if (requestLogin === login && requestPassword === password) {
      dispatch(fetchUsers());
      setEmptyInput.forEach(elem => elem(''));
    } else {
      dispatch(changeValidate());

      setTimeout(() => {
        dispatch(changeValidate());
      }, 1000);
    }
    
  };
  return (
    <button onClick={(): void => {
      buttonHandler(loginInput, passwordInput);
    }}>
      Apply
    </button>
  );
};

export default ButtonForm;