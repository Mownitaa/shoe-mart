import React,{useState} from 'react'
import useAuth from '../../../hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

export const Login = () => {
  const [loginData,setLoginData] = useState({});
  const {user, loginUser,signInWithGoogle, isLoading, authError} = useAuth();
  
const location = useLocation();
const history = useHistory();

const handleOnChange = e =>{
  const field = e.target.id;
  const value = e.target.value;
  const newLoginData = {...loginData}   
  newLoginData[field]= value;
  setLoginData(newLoginData);
};

const handleLoginSubmit = e =>{
loginUser(loginData.email, loginData.password, location, history)
  e.preventDefault();
}

const handleGoogleSignIn = () => {
  signInWithGoogle(location, history)
}



  return (
    <div>
      <div class="w-screen max-w-xs">
  <form onSubmit={handleLoginSubmit} class="bg-black text-left shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input onChange={handleOnChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="Email"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={handleOnChange} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" id="password" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="submit">
        Sign In
      </button>
      <p className='text-white text-3xl px-6'>or</p>
      <button onClick={handleGoogleSignIn} class="bg-white text-2xl hover:bg-blue-300 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full shadow">
  <ion-icon name="logo-google"></ion-icon>
</button>
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
    </div>
  </form>

  <NavLink className='text-blue-700 text-xl' to="/register">
        New User? Please Register
        </NavLink>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Shoe-Mart. All rights reserved.
  </p>
</div>
    </div>
  )
}
