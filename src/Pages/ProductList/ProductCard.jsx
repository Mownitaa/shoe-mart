import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

export const ProductCard = (props) => {

  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(cartActions.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      img: props.img
    })
  );
    alert("Product Added Successfully!")
  }

  const {id, name, price, img, type } = props.product;
  return (
    <div>
<div
  className="ml-8 text-left block max-w-[22rem] rounded-lg bg-white">
  <a href="#!" data-te-ripple-init data-te-ripple-color="light">
    <Link to={`/shop/${id}`}>
    <motion.img whileHover={{scale:1.2}}
      className="rounded-t-lg"
      src={img}
      alt="" />
    </Link>
  </a>
  <div className="p-6">
    <Link to={`/shop/${id}`}>
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
       {name}
    </h5>
    </Link>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {type} 
    </p>
    <span className="mb-4 lg:mr-48 sm:mr-36 text-base text-neutral-600 dark:text-neutral-200">
      {price}
    </span>
    <span className='mt-4 text-2xl' onClick={addToCart}>
    <ion-icon name="add-circle"></ion-icon>
    </span>
  </div>
</div>
    </div>
  )
}
