import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/slices/cartSlice';
export const AdminProductDetails = () => {

    const {productId} = useParams();
    const [adminProduct, setAdminProduct] = useState([]);
    useEffect(()=>{
        fetch(`https://shoe-mart-server.vercel.app/products/${productId}`)
        .then(res=> res.json())
        .then(data=> console.log(data));
    }, [])

    const dispatch = useDispatch()
    const addToCart = ()=>{
      dispatch(cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.img
      })
    );
      toast.success("Product Added Successfully!", {
        toastId: 'success1',
    })
    };
  return (
<div className='container mt-28'>
      <div className='text-left grid md:grid-cols-2 sm:grid-cols gap-4'>
        <div className='mx-auto'>
        <img className='w-screen' src={adminProduct.img} alt="..."/>
        </div>
        <div>
        <h2 className='text-4xl font-bold'>Shoe-Mart {adminProduct.type} For Men</h2> 
        <p className='mt-8'><span className='mr-4 text-xl font-bold'>Name:</span>{adminProduct.name}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Brand:</span>{adminProduct.brand}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Product Code:</span>{adminProduct.productCode}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Availability:</span>{adminProduct.availability}</p>
        <p className='mt-2 text-6xl'>{adminProduct.price}</p>
        

        <div className='mt-8'>
        <button  onClick={addToCart} className="mr-4 bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded border-none">
          Add To Cart
        </button>
        <Link to='/shop'>
        <button className="bg-gray-400 hover:bg-black text-white font-bold py-2 px-4 rounded border-none">
          Back To Shopping
        </button>
        </Link>
        </div>
        </div>
    </div>
    
    <div className='text-left mt-24'>
      <h3 className='mb-8 text-3xl font-bold'>Description</h3>
      <p >{adminProduct.description}</p>
      <p className='mt-12 text-2xl'>Features:</p>
      <p className='mt-4'>-Type: {adminProduct.type}</p>
      <p className='mt-2'>-Gender: {adminProduct.Gender}</p>
      <p className='mt-2'>-Upper Material: {adminProduct.upperMaterial}</p>
      <p className='mt-2'>-Sole: {adminProduct.Sole}</p>

      <p className='my-12'><span className=' text-xl font-bold'>Disclaimer:</span> {adminProduct.disclaimer}</p>
    </div>
    </div>  
    )
}
