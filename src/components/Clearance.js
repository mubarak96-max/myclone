import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { clearance } from '../clearanceData'


function Clearance (){
const [clearCars,setClearCars] = useState(clearance)

    return(
        <>
        <div className="clearance-head">
            <h3 className="clearance-title">Clearance</h3>
            <button className="new-arrivals-see-more">
            See all
            <FaAngleRight size={20}/>
        </button>
        </div>
        <div className="line"></div>

        <section className="clear-cars">
            {
                clearCars.map(({...clearance})=>{
                    const {id,model,image,price,save } = clearance
                    return (
                        <div key={id} className="clear-car">
                            <img src={image} alt={model}/>
                            <h3 className="clear-car-model">{model}</h3>
                            <p>Price <span className="clear-price">{price} </span></p>
                            <p>Save <span className="save">{save} off</span></p>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
}

export default Clearance