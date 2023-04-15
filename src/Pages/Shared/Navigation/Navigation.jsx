import React, { useState } from 'react'
import userIcon from '../../../assets/images/userIcon.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


export const Navigation = () => {
  //get user
const {user,logout} = useAuth();

    let Links =[
        {name:"Home",link:"/home"},
        {name:"Shop",link:"/shop"},
        {name:"Cart",link:"/cart"},
        {name:"Dashboard",link:"/dashboard"},
      ];
      let [open,setOpen]=useState(false);
 
  return (


    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-5'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-2xl mr-1 pt-2'>
        <ion-icon name="cart-outline"></ion-icon>
        </span>
        <span className='text-2xl'>
                SHOE-MART
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-l md:my-0 my-7'>
              <a href={link.link} className='text-black hover:text-gray-400 duration-500'>{link.name}</a>
            </li>

          ))
        }
        <div>
      {
              user?.email ?
              <div>
            <button onClick={logout} className="bg-white text-red-700 border-hidden text-black font-bold py-2 px-4 rounded" type="button">
        Logout
      </button>
            {/* <NavLink to="/dashboard">
            <button className="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded" type="button">
              Dashboard
            </button>
            </NavLink> */}
              </div>
              :
              <NavLink to="/login">
            <button className="py-1 px-1 bg-white hover:bg-blue-300 text-black font-bold border-none rounded-full" type="button">
            <img className='w-12 mx-auto' src={userIcon} alt=""/>
            </button>
            </NavLink>
            }
          </div>
      </ul>
      </div>
    </div>
  )
}

