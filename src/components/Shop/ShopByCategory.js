import React, {useState} from 'react'
import {categories} from './byCategoryData'

console.log(categories)

const ShopByCategory = () => {

    const[categori,setCategori] = useState(categories)

    return (
        <>
         <h3 className="shop-title">shop by category</h3>  
         <div className="categories">
             {
                 categori.map(({...categories})=>{
                     const {id,category,image} = categories
                     return (
                         <div key={id} className="category">
                             <img src={image} alt={category}/>
                             <h3>{category}</h3>
                         </div>
                     )
                 })
             }
        </div> 
        </>
    )
}

export default ShopByCategory
