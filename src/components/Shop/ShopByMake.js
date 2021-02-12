import React, {useState} from 'react'
import {makers} from './byMakeData'

console.log(makers)

const ShopByMake = () => {
    const[brands,setBrands] = useState(makers)
    return (
        <>
        <h3 className="shop-title">Shop by Make</h3>
            <div className="by-make">
               <div className="makers">
                   {
                       brands.map((makers)=>{
                           const {id,maker,image} = makers
                           return (
                               <div key={id} className="maker">
                                   <img src={image} alt={maker}/>
                                   <h3>{maker}</h3>
                               </div>
                           )
                       })
                   }
                   <a href="#">See More...</a>
               </div>
           </div>
        </>
    )
}

export default ShopByMake
