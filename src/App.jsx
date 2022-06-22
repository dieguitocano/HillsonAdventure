import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'
import logo from './resources/Hillson-removebg-preview.png'
import Form from './components/Form'



function App() {


  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)

  const URL = 'https://users-crud1.herokuapp.com/users/'


  console.log(users)

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))

  }

  const createNewUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))


  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getAllUsers())
  }

  const updateUserById = id => {

    const userUpdate = {
      email: 'pablo@gmail.com',
      password: 'ghsdr',
      first_name: 'Juan',
      last_name: 'Pablo',
      birthday: '1982-06-21'
    }

    axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, userUpdate)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getAllUsers())
  }


  const updatePartialById = id => {
    axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getAllUsers())
  }

  const showForm = () => setIsShowForm(!isShowForm)



  return (
    <>
      <div className="App">

        <div className='title-container'>
          <div className='logo-container'> <img className='logo-img' src={logo} alt="" /></div>

          <div className='button-div'>
            <button className='create-btn' onClick={showForm}>{isShowForm? 'Hide form':'New customer'}</button>
          </div>
        </div>
        <div>
        {
          isShowForm && <Form createNewUser={createNewUser}/>
        }
        </div>
        <div className='card-box'>

          {
            users?.map(user => (
              <CardUser
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                updateUserById={updateUserById}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
