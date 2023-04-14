import React,{useState, useEffect} from 'react'
import { ProductCard } from './ProductCard'

export const Products = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch('productData.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })
  return (
    <div>
        <div>
        <h3 className='mb-24 text-3xl font-bold'>OUR HAND PICKED COLLECTION FOR YOU</h3>
    </div>
    <div className='mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {
            products.map(product => <ProductCard
                key={product.id}
                product={product}
                ></ProductCard>)
        }
    </div>
    </div>
  )
}
