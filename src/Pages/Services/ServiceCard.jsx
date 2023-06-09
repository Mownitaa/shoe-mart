import React from 'react'

export const ServiceCard = (props) => {
  return (
    <div className='mt-24 mx-auto text-left block max-w-[22rem] rounded-lg bg-black p-6 shadow-lg 
    hover:bg-white'>
        <span className='text-5xl'>
        <ion-icon name={props.icon}></ion-icon>
        </span>
        <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.subtitle}
        </p>
    </div>
    )
}
