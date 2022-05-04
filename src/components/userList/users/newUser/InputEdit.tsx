import React, { FC } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { changeTextInUser } from '../../../../reducers/userReducer';
type Props = {
  reference: {current: (HTMLInputElement | null)},
  state: [value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>],
  newProps: {id: number, text: string, value: string | undefined}
}

const InputEdit: FC<Props> = (props) => {
  const {reference, state, newProps} = props;
  const {id, text } = newProps;
  const [value, setValue] = state;
  const dispatch = useAppDispatch();

  const authentication = (): void => {
    if(reference.current)  {
      dispatch(changeTextInUser({id, text, value: reference.current?.value}));
      setValue(false);   
    }
  };

  return (
    <input
      maxLength={50}
      ref={reference}
      onKeyUp={(event): void => {
        if(event.key ==='Enter') {          
          authentication();
        }
      }}      
      onBlur={(): void => { 
        authentication();
      }} 
      className={value ? 'user-list__edit_active': ''} 
    />
  );
};

export default InputEdit;