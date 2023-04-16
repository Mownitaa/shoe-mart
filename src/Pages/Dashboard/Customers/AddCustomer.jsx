import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Alert, Typography } from '@mui/material';

export const AddCustomer = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('Added Successfully');
                    reset();
                    setSuccess(true);
                }
            })
    }
    
  return (
    <div>
         <Typography sx={{fontSize:"2rem", fontWeight:600}}>Add New Admin</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} className="w-96 mt-8 p-2 border" type="text" placeholder="Name" />
<br/><br/>
      <input className="w-96 p-2 border" {...register("email")} type="email" placeholder="Email" />
<br/><br/>
      <input className="px-7 py-2 rounded bg-black text-white border" type="submit" value="Submit" />
      </form>
      <br/>
        <br/>
        {success && <Alert severity="success">Admin Added Successfully!</Alert>}
    </div>
  )
}
