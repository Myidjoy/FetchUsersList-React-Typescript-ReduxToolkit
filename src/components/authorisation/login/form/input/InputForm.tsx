import React, {FC} from 'react';
import './InputForm.css';

type Props = {
    type: string, 
    required: boolean, 
    placeholder: string,
    value: string
    setValue: (type: string, value: string) => void | null
}
const InputForm: FC<Props> = (props): JSX.Element => {
  const {placeholder, required, type, setValue, value} = props;
  const classes = ['authorisation__line'];
  
  value !== '' 
    ? classes.push('authorisation__line_active'):
    null;

  return (
    <div className={classes.join(' ')}>
      <input 
        id={type}
        onInput={(event): void=>{
          setValue(type, event.currentTarget.value);
        }}
        required={required}
        type={type}
        value={value}
      />
      <label htmlFor={type}>{placeholder}</label>
    </div>
    
  );
};

export default InputForm;