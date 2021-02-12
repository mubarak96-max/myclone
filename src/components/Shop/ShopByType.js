import React, {useState} from 'react'
import {types} from './byTypeData'

const ShopByType = () => {
    const[carType,setCarType] = useState(types)
    return (
        <>
            <h3 className="shop-title">shop by type</h3>
            <div className="types">
                {
                    carType.map(({...types})=>{
                        const {id,type,image} = types
                        return(
                            <div key={id} className="type">
                                <img src={image} alt={type}/>
                                <h3>{type}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopByType
