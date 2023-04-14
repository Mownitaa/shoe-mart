import React, { useState } from 'react'


export const Navigation = () => {
    let Links =[
        {name:"Home",link:"/home"},
        {name:"Shop",link:"/shop"},
        {name:"Cart",link:"/cart"},
        {name:"Dashboard",link:"/dashboard"},
        {name:<ion-icon name="log-in-outline"></ion-icon>,link:"/login"},
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
              <a href={link.link} className='text-dark hover:text-grey-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

