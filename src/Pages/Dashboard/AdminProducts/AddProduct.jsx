import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Alert, Typography } from '@mui/material';

export const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shoe-mart-server.vercel.app/products', data)
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
        <div>
         <Typography sx={{fontSize:"2rem", fontWeight:600}}>Add New Product</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 60 })} className="w-96 mt-8 p-2 border" type="text" placeholder="Name" />
<br/><br/>
        <input className="w-96 p-2 border" {...register("img")} type="text" placeholder="Image URL" />
        <br/><br/>
        <input className="w-96 p-2 border" {...register("description")} type="text" placeholder="Description" />
        <br/><br/>
        <input className="w-96 p-2 border" {...register("disclaimer")} type="text" placeholder="Disclaimer" />
        <br/><br/>
        <input className="w-48 mx-1 p-2 border" {...register("brand")} type="text" placeholder="Brand Name" />
        <input className="w-48 p-2 border" {...register("productCode")} type="text" placeholder="Product Code" />
        <br/><br/>
        <input className="w-48 mx-1 p-2 border" {...register("availability")} type="text" placeholder="Availability" />
        <input className="w-48 p-2 border" {...register("price")} type="text" placeholder="Price" />
        <br/><br/>

        <input className="w-48 mx-1 p-2 border" {...register("type")} type="text" placeholder="Type" />
        <input className="w-48 p-2 border" {...register("Gender")} type="text" placeholder="Gender" />
        <br/><br/>

        <input className="w-48 mx-1 p-2 border" {...register("upperMaterial")} type="text" placeholder="Upper Material" />
        <input className="w-48 p-2 border" {...register("sole")} type="text" placeholder="Sole" />
        <br/><br/>

      <input className="px-7 py-2 rounded bg-black text-white border" type="submit" value="Submit" />
      </form>
      <br/>
        <br/>
        {success && <Alert severity="success">Admin Added Successfully!</Alert>}
    </div>
    </div>
  )
}
