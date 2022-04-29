import React, {FC} from 'react'
import './InputForm.css'

type Props = {
    type: string, 
    required: boolean, 
    placeholder: string
}
const InputForm: FC<Props> = (props): JSX.Element => {
  return (
    <div className='authorisation__line'>
      <input 
        {...props}
      />
    </div>
    
  )
}

export default InputForm