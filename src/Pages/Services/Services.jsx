import React from 'react'
import Data from './ServiceData'
import {Card} from './Card'

export const Services = () => {
    const dataComp = Data.map((data) => {
        return (
            <div>
                <Card 
                key={data.key}
                icon={data.icon}
                title={data.title}
                subtitle={data.subtitle}></Card>
            </div>
          )
    });

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {dataComp}
        </div>
    )
}
