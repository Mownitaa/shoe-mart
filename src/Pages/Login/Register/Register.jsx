import React, { useState }  from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export const Register = () => {
  const [loginData,setLoginData] = useState({})
  const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();
  
      const handleOnBlur = e =>{
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}   
          newLoginData[field]= value;
          console.log(newLoginData);
          setLoginData(newLoginData);
          // console.log(field, value,newLoginData)
      };
  
      const handleLoginSubmit = e => {
          if(loginData.password !== loginData.password2){
            alert('Your Password did not match');
              return
          }
          registerUser(loginData.email, loginData.password, loginData.name, history);
          e.preventDefault();
      }
  return (
    <div>
      <div class="mt-12 w-screen max-w-xs">
  { !isLoading && <form onSubmit={handleLoginSubmit} class="bg-black text-left shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input onChange={handleOnBlur} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="name" name="name" type="text" placeholder="Name"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input onChange={handleOnBlur} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" name="email" type="text" placeholder="Email"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={handleOnBlur} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" name="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Re-enter Password
      </label>
      <input onChange={handleOnBlur} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" name="password2" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </form>}


        {
          user?.email && <alert>
            User login successfull!
          </alert>
        }
        {
          authError && <alert>
            {authError}
          </alert>
        }

  <NavLink className='text-blue-700 text-xl' to="/login">
        Already registered? Please Login
        </NavLink>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Shoe-Mart. All rights reserved.
  </p>
</div>
    </div>
  )
}
