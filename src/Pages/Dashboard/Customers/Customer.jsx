import React from 'react'

export const Customer = ({customer}) => {
    const {displayName, email} = customer;
  return (
    <div className='p-3 mb-4 text-left text-gray-600 border grid grid-cols-2'>
        <p><span className='text-xl text-black font-bold'>Name:</span> {displayName}</p>
        <p><span className='text-xl text-black font-bold'>Email:</span> {email}</p>
    </div>
  )
}
