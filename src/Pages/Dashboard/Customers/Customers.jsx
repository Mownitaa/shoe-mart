import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Typography } from '@mui/material';
import { Customer } from './Customer';

export const Customers = () => {
  const {user} = useAuth();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
      const url = 'http://localhost:5000/users'
      fetch(url)
      .then(res=>res.json())
      .then(data => setCustomers(data));
  },[])

  return (
    <div>
        <p className='mb-4 text-3xl font-bold text-blue-900'>All Customers</p>
      <div>
      {
        customers.map(customer => <Customer
        key={customer.email}
        customer={customer}></Customer>)
      }
      </div>
    </div>
  )
}
