import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
export const ProductDetails = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('/productData.json')
        .then(res=> res.json())
        .then(data=> setProduct(data[`${productId-1}`]));
    }, [productId])
  return (
    <div className='container mt-28'>
      <div className='text-left grid md:grid-cols-2 sm:grid-cols gap-4'>
        <div className='mx-auto'>
        <img className='w-screen' src={product.img} alt="..."/>
        </div>
        <div>
        <h2 className='text-4xl font-bold'>Shoe-Mart {product.type} For Men</h2> 
        <p className='mt-8'><span className='mr-4 text-xl font-bold'>Name:</span>{product.name}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Brand:</span>{product.brand}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Product Code:</span>{product.productCode}</p>
        <p className='mt-2'><span className='mr-4 text-xl font-bold'>Availability:</span>{product.availability}</p>
        <p className='mt-2 text-6xl'>{product.price}</p>
        

        <div className='mt-8'>
        <button className="mr-4 bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Add To Cart
        </button>
        <Link to='/shop'>
        <button className="bg-gray-400 hover:bg-black text-white font-bold py-2 px-4 rounded">
          Back To Shopping
        </button>
        </Link>
        </div>
        </div>
    </div>
    <div className='text-left mt-24'>
      <h3 className='mb-8 text-3xl font-bold'>Description</h3>
      <p >{product.description}</p>
      <p className='mt-12 text-2xl'>Features:</p>
      <p className='mt-4'>-Type: {product.type}</p>
      <p className='mt-2'>-Gender: {product.Gender}</p>
      <p className='mt-2'>-Upper Material: {product.upperMaterial}</p>
      <p className='mt-2'>-Sole: {product.Sole}</p>

      <p className='my-12'><span className=' text-xl font-bold'>Disclaimer:</span> {product.disclaimer}</p>
    </div>
    </div>
  )
}
