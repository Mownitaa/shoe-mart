import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export const ProductDetails = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('/productData.json')
        .then(res=> res.json())
        .then(data=> setProduct(data[`${productId-1}`]));
    }, [productId])
  return (
    <div>
       <h2>{productId}</h2> 
       <p>{product.description}</p>
       <img src={product.img}/>
    </div>
  )
}
