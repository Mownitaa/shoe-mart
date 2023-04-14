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
        {
            products.map(product => <ProductCard
                key={product.id}
                product={product}
                ></ProductCard>)
        }
    </div>
  )
}
