// import React from 'react'

// export const AdminProducts = () => {
//   return (
//     <div>AdminProducts</div>
//   )
// }
import React,{useState, useEffect} from 'react'
import { AdminProduct } from './AdminProduct';

export const AdminProducts = () => {
    const [adminProducts, setAdminProducts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setAdminProducts(data))
    })
  return (
    <div>
        <div>
        <h3 className='mb-24 text-3xl font-bold'>All Products</h3>
    </div>
    <div className='mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {
            adminProducts.map(adminProduct => <AdminProduct
                key={adminProduct._id}
                adminProduct={adminProduct}
                ></AdminProduct>)
        }
    </div>
    </div>
  )
}
