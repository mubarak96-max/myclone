import React from 'react'
import {FaArrowCircleRight} from 'react-icons/fa'

function Assistance(){
    return (
        <>
        <div className="assistance">
            <h3>assistance in buying cars</h3>
            <div className="line"></div>
            <a href="https://sp.beforward.jp/car_wiki">car wiki archives <FaArrowCircleRight/></a>
            <a href="https://sp.beforward.jp/car_comparison">car comparison archives <FaArrowCircleRight/></a>
        </div>

        <div className="popular">
            <h3>popular japanese cars</h3>
            <a href="https://sp.beforward.jp/stocklist/make=1/model=235/sortkey=n">toyota rav4</a>
            <a href="https://sp.beforward.jp/stocklist/make=1/model=181/sortkey=n">toyota harrier</a>
            <a href="https://sp.beforward.jp/stocklist/make=1/model=275/sortkey=n">toyota vitz</a>
            <a href="https://sp.beforward.jp/stocklist/keyword=noah/sortkey=n">toyota noah</a>
            <a href="https://sp.beforward.jp/stocklist/make=1/model=185/sortkey=n">toyota hiace van</a>
        </div>
        <a className="show-more-link" href="https://sp.beforward.jp/stocklist/make=1/model=185/sortkey=n" >show more...</a>
        </>
    )
}

export default Assistance