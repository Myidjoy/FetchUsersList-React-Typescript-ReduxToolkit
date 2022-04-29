import React from 'react'
import InputForm from './input/InputForm'
import { Input } from '../../../../types/types'
import ButtonForm from './button/ButtonForm'
import './Form.css'
import Loading from './loading/Loading'
import { useAppSelector } from '../../../../app/hooks'


const inputs: Input[] = [
  {id: 'login', type: 'text', required: true, placeholder: 'login'},
  {id: 'password', type: 'password', required: true, placeholder: 'password'}
]

const Form = (): JSX.Element => {
  const {status} = useAppSelector(state => state.users)  
  console.log(status)
  return (
    <div className='authorisation__form'>
      {inputs.map(input => <InputForm key={input.id} type={input.type} required={input.required} placeholder={input.placeholder} />)}
      <ButtonForm/>
      {status === 'loading' 
        ? <Loading/> :
        null
      }
    </div>
  )
}

export default Form