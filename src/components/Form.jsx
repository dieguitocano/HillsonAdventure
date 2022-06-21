import React from 'react'

const Form = () => {
  return (
    <form action="" >
        <div>
          <label htmlFor="first_name">Name</label>
          <input type="text" id='first_name' />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" id='last_name' />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id='email' />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" id='password' />
        </div>
        <div>
          <label htmlFor="birthday">birthday</label>
          <input type="date" id='birthday' />
        </div>
      </form>
  )
}

export default Form