import React, {useState} from 'react'
import {locations} from './byLocationData'

const ShopByLocation = () => {
    const[country,setCountry] = useState(locations)
    return (
        <>
            <h3 className="shop-title">Shop by Stock Location</h3>
            <div className="stock-locations">
                {
                    country.map(({...locations})=>{
                        const {id,location,image} = locations
                        return (
                            <div key={id} className="stock-location">
                                <img src={image} alt={location}/>
                                <h3>{location}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopByLocation
