import React from 'react'
import Data from './ServiceData'
import {ServiceCard} from './ServiceCard'

export const Services = () => {
    const dataComp = Data.map((data) => {
        return (
            <div>
                <ServiceCard 
                key={data.id}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}></ServiceCard>
            </div>
          )
    });

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {dataComp}
        </div>
    )
}
