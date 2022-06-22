import React from 'react'
import { useForm } from 'react-hook-form'


const Form = ({createNewUser}) => {

  const { handleSubmit, register, reset } = useForm()

  const defaultValuesForm = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
  }

  const submit = data => {
    createNewUser(data)
    console.log(data)
    reset(defaultValuesForm)
  }


  return (

    <form className='form-container' onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="first_name"></label>
        <input type="text" id='first_name' placeholder='Name' {...register('first_name')} />
      </div>
      <div>
        <label htmlFor="last_name"></label>
        <input type="text" id='last_name' placeholder='Last name' {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input type="text" id='email' placeholder='email' {...register('email')} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="text" id='password' placeholder='password' {...register('password')} />
      </div>
      <div>
        <label htmlFor="birthday"></label>
        <input type="date" id='birthday' {...register('birthday')} />
      </div>
      <button className='submit-button'>Submit</button>
    </form>
  )
}

export default Form