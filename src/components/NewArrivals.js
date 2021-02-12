import React, { useState } from 'react'
import {newArrivals} from '../newArrivalsData'
import { FaAngleRight } from 'react-icons/fa'


function NewArrivals(){
    const [newCars,setNewCars] = useState(newArrivals)

    return (
        <>
        <div className="new-arrivals-head">
        <h1>New arrivals</h1>
        <button className="new-arrivals-see-more">
            See all
            <FaAngleRight size={20}/>
        </button>
        </div>
        <div className="line"></div>
        <section className="new-arrivals">
            {
                newCars.map((newArrivals)=>{
                    const {id,model,image,price} = newArrivals
                    return(
                        <div key={id} className="new-car">
                            <img src={image} alt={model} className="new-car-image"/>
                            <h3 className="new-car-model">{model}</h3>
                            <p>Price:<span className="new-car-price" >{price}</span></p>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}

export default NewArrivals