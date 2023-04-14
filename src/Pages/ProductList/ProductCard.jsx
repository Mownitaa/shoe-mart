import React from 'react'
import { Link } from 'react-router-dom';

export const ProductCard = (props) => {
    const {id, name, price, img, type } = props.product;
  return (
    <div>
<div
  class="ml-8 text-left block max-w-[22rem] rounded-lg bg-white">
  <a href="#!" data-te-ripple-init data-te-ripple-color="light">
    <img
      class="rounded-t-lg"
      src={img}
      alt="" />
  </a>
  <div class="p-6">
    <Link to={`/shop/${id}`}>
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
       {name}
    </h5>
    </Link>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {type} 
    </p>
    <span class="mb-4 mr-48 text-base text-neutral-600 dark:text-neutral-200">
      {price}
    </span>
    <span className='mt-4 text-2xl'>
    <ion-icon name="add-circle"></ion-icon>
    </span>
  </div>
</div>
    </div>
  )
}
