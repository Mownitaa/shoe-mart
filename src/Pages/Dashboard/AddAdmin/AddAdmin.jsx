import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth';

export const AddAdmin = () => {
  const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
  const handleAdminSubmit = e => {
    const user = {email};
    fetch('http://localhost:5000/users/admin', {
        method:'PUT',
        headers: {
            // 'authorization' : `Bearer ${token}`,
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then (res => res.json())
    .then(data => {
        if(data.modifiedCount){
            console.log(data);
            setSuccess(true);
        }
    })
    e.preventDefault()
  }
  return (
    <div>
      <Typography sx={{fontSize:"2rem", fontWeight:600}}>Add New Admin</Typography>
      <form onSubmit={handleAdminSubmit}>
      <TextField 
        sx={{mt: 5,width:'100%'}}
        label="Email"
        type="email"
        onBlur={handleOnBlur}
        variant="filled"
        />
        <br/>
        <br/>
        <Button type="submit" variant="contained">Add Admin</Button>
      </form>
      <br/>
        <br/>
        {success && <Alert severity="success">Admin Added Successfully!</Alert>}
    </div>
  )
}
