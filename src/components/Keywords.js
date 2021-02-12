import React, { useState } from 'react'
import {keywords} from '../keywordsData'
import {FaAngleRight, FaArrowCircleRight} from 'react-icons/fa'

function Keywords(){
const [topWord,setTopWord] = useState(keywords)

    return(
        <>
        <h3 className="keywords-title">Popular Keywords in Uganda</h3>
        <div className="line"></div>
        <div className="keywords">
            {
                topWord.map(({...keywords})=>{
                    const {id, keyword } = keywords
                    return (
                        <div key={id} className="keyword">
                            <h3>{keyword}</h3>
                        </div>
                    )
                })
            }
        </div>
        <button className="see-more-keywords">
            See More...
        </button>

        <div className="choose-delivery">
            <h3>choose your delivery options</h3>
            <div className="line"></div>
            <p>choose final country</p>
            <div className="options">
            <select>
                <option value="Afghanstan">Afghanstan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Argentina">Argentina</option>
                <option value="United States of America">United States of America</option>
                <option value="Uganda">Uganda</option>
            </select>
            </div>
        </div>
        <div className="services">
            <a href="https://www.beforward.jp/beforward_uganda">Uganda Our Local Services in Uganda <FaArrowCircleRight/></a>
        </div>
        </>
    )
}

export default Keywords