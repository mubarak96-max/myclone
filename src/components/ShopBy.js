import React from 'react'
import ShopByMake from '../components/Shop/ShopByMake'
import ShopByType from '../components/Shop/ShopByType'
import ShopByCategory from '../components/Shop/ShopByCategory'
import ShopByLocation from '../components/Shop/ShopByLocation'

function ShopBy(){
    return (
        <>
        <ShopByMake/>
        <ShopByType/>
        <ShopByCategory/>
        <ShopByLocation/>
        </>
    )
}

export default ShopBy