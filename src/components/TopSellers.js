import React, { useState } from 'react'
import { topSellers } from '../data'


function TopSellers(){
    const [topCars,setTopCars] = useState(topSellers)

    return (
        <>
         <h2>Top Sellers In Uganda</h2>
         <div className="line"></div>
        <section className="top-sellers">
           
            {
            topCars.map(({...topSellers})=>{
                    const {id, model, image } = topSellers
                    return (
                        <div className="wrapper">
                            <span className="car-number">{id}</span>
                            <div key={id} className="top-car">
                            <img  src={image} alt={model} className="top-car-image"/>
                            <h3 className="top-car-model">{model}</h3>
                        </div>
                        </div>
                        
                    )
                })
            }
        </section>
        </>

    )
}

export default TopSellers