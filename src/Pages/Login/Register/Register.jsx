import React, { useState }  from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

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
      {
        isLoading && <div className="text-center">
        <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
      }
      <div className="mt-12 w-screen max-w-xs">
  { !isLoading && <form onSubmit={handleLoginSubmit} className="bg-black text-left shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input onChange={handleOnBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="name" name="name" type="text" placeholder="Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input onChange={handleOnBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" name="email" type="text" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={handleOnBlur} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" name="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Re-enter Password
      </label>
      <input onChange={handleOnBlur} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" name="password2" type="password" placeholder="******************"/>
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </form>}


      <div>
      {
          user?.email && toast.success('Register Successful!', {
            toastId: 'success1',
        })
        }
        {
          authError && toast.error(`${authError}`, {
            toastId: 'error1',
        })
        }
      </div>

  <NavLink className='text-blue-700 text-xl' to="/login">
        Already registered? Please Login
        </NavLink>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 Shoe-Mart. All rights reserved.
  </p>
</div>
    </div>
  )
}
