import React from 'react'

export const Login = () => {
  return (
    <div>
      <div class="w-screen max-w-xs">
  <form class="bg-black text-left shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        User Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <p className='text-white text-3xl px-6'>or</p>
      <button class="bg-white text-2xl hover:bg-blue-300 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-full shadow">
  <ion-icon name="logo-google"></ion-icon>
</button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Shoe-Mart. All rights reserved.
  </p>
</div>
    </div>
  )
}
