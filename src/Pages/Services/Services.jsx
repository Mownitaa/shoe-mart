import React from 'react'
import serviceData from '../../assets/data/serviceData'
export const Services = () => {
  return (
    <div>
        <div>
            {
                serviceData.map((item, index) => {
                    <div key={index}
  className="grid grid-cols-4 gap-4">
    <span>
    <ion-icon name={item.icon}></ion-icon>
    </span>
  <h5
    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    {item.title}
  </h5>
  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    {item.subtitle}
  </p>
                    </div>
                })
            }
        </div>





        <div
  className="block max-w-[22rem] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
     <span>
    <ion-icon name="bus-outline"></ion-icon>
    </span>
  <h5
    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    Card title
  </h5>
  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
    </div>




    </div>
  )
}
