import axios from 'axios'
import React from 'react'

const CardUser = ({ user, deleteUser, updateUserById}) => {

  



  return (
    <>
      <article className='card-container'>
        <h2>{user.first_name} {user.last_name}</h2>
        <p><span>E-MAIL</span></p>
        <p>{user.email}</p>
        <p><span>BIRTHDAY</span></p>
        <p>{user.birthday}</p>
        <button onClick={() => deleteUser(user.id)}>
         <i class="fa-solid fa-trash"></i>
        </button>
        <button onClick={() => updateUserById(user.id)}><i class="fa-solid fa-pen-to-square"></i></button>
      </article>
     
    </>
  )
}

export default CardUser