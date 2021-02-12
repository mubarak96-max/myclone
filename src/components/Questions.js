import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaArrowCircleUp } from 'react-icons/fa'
import {questions} from './questionsData'

function SingleQuestion ({...questions}){
    const {id,question,answer} = questions
    const[showAns,setShowAns] = useState(false)
    return (
        <>
        <div key={id} className="question">
            <p>{question}</p>
                <button onClick={()=>setShowAns(!showAns)}>
                     <FaAngleDown/>
             </button>
        </div> 
        <hr/>
       
        {showAns && <p className="answer">{answer}</p>}  
        </>   
    )
} 

const Questions = () => {
const [qtn] = useState(questions)
const [showAdvantages,setShowAdvantages] = useState(false)
    return (
        <>
        <section className="frequent-questions">
            <h3>frequently asked questions</h3>
            <div className="line"></div>
            {
                qtn.map(({...questions})=>{
                    return(
                        <>
                        <SingleQuestion {...questions}/>
                    </>
                    )
                })
            }
            <a href="https://sp.beforward.jp/support/faq" className="more-questions">view more questions answers...</a>
            
            
        </section>
            <button className="page-top">
                            Page to Top
                            <FaArrowCircleUp size={18} color="orange"/>
            </button>

            <div className="more-questions">
                <a href="https://sp.beforward.jp/support/how-to-buy">How to buy</a>
                <a href="https://sp.beforward.jp/support/payment">How to pay</a>
                <a href="https://sp.beforward.jp/support/faq">FAQs</a>
                <a href="https://sp.beforward.jp/support/inquiryform">Inquiry</a>
                <a href="https://sp.beforward.jp/support/mypage">What is my account?</a>
                <a href="https://sp.beforward.jp/support/warranty-coverage">BF Warranty</a>
                <a href="https://sp.beforward.jp/support/buynow">What is buy now?</a>
                <a href="https://www.beforward.jp/beforwardsupporters/global">What is BEFORWARD SUPPORTERS?</a>
                <a href="https://sp.beforward.jp/about/why-choose-be-forward">Why choose BF?</a>
                <a href="https://www.beforward.jp/cap">Car Arrival Progress</a>
                <a href="https://sp.beforward.jp/support/bf-points">What is BF points?</a>
                <a href="https://cdn.beforward.jp/assets/pdf/shipping_schedule_africa.pdf">Shipping Schedule</a>
                <a href="https://www.beforward.jp/shipping_agents">Shipping agents</a>
                <a href="Document Processing Centers"></a>
                <a href="https://www.beforward.jp/about">About BEFORWARD</a>
                <a href="https://sp.beforward.jp/testimonials/site/">Customer Reviews</a>
                <a href="https://blog.beforward.jp/">Blog</a>
                <a href="https://real-estate-zambia.beforward.jp/">Real Estate Zambia</a>
                <a href="https://real-estate-tanzania.beforward.jp/">Real Estate Tanzania</a>
                <a href="https://real-estate-nigeria.beforward.jp/">Real Estate Nigeria</a>
                <a href="https://www.beforward.jp/terms">Terms and Conditons</a>
                <a href="https://www.beforward.jp/privacy">Privacy Policy</a>
                <a href="https://www.beforward.jp/disclaimer">Disclaimer</a>
                
                <div className="advantages">
                    <button onClick={()=>setShowAdvantages(!showAdvantages)}>
                        Advantages with BE FORWARD
                        {showAdvantages ? <FaAngleDown/> : <FaAngleUp/>}
                    </button>
                    {showAdvantages && <div className="advantages-list">
                        <ul>
                            <li><p>At "BE FORWARD" we have a large number of quality used cars, trucks and vans with more arriving everyday.</p></li>
                            <li><p>Below average prices, to suit your budget.</p></li>
                            <li><p>Every car has multiple pictures so you can really see what you are buying.</p></li>
                            <li><p>We will respond to any questions you may have quickly.</p></li>
                            <li><p>We are very experienced in shipping internationally. Our shipping partners are ready to send your vehicle to you immediately.</p></li>
                            <li><p>There is a prfoessional mechanic on our staff to check vehicles; we also offer a tuning service.</p></li>
                            <li><p>Our professional commercial vehicle branch provide our trucks and vans.</p></li>
                            <li><p>We pride ourselves in providing a reliable service, we have had no problems with our transactions throughout the history of our company.</p></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Questions
