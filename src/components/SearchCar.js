import React, { useState } from 'react'
import { FaSearch, FaCar, FaCarBattery, FaAngleDown, FaAngleUp } from 'react-icons/fa'

function SearchCar(){
    const [showContact,setShowContact] = useState(false)

    return(
        <>
        <section className="search">
            <div className="searchBar">
                <input type="text" placeholder="Search For Used Car"/>
                <button className="searchCar-btn">
                    <FaSearch 
                    color="white"
                    size={20}/>
                </button>
            </div>
            <div className="searchLinks">
                <a className="used-cars" href="https://sp.beforward.jp/?sitemode=sp">
                    <FaCar size={23}/> Used Cars
                </a>

                <a className="auto-parts" href="https://autoparts.beforward.jp/">
                    <FaCarBattery size={23}/> Auto Parts
                </a>
            </div>
        </section>

        <div className="contact">
            <div className="contact-header">
                <h2>BE FORWARD SALES OFFICE IS OPEN.
                SHIPMENT FROM JAPAN IS AVAILABLE!</h2>

                <button className="contact-btn" 
                    onClick={()=>setShowContact(!showContact)}>
                    {showContact ? <FaAngleDown size={18}/> : <FaAngleUp size={18}/>}
                </button>
            </div>

            {showContact && <div className="contact-info">
                <p>We are accepting orders, and our delivery service is still available.</p>
                <p>Also, please be informed that our Sales staff will be working from home until further notice.</p>
                <p>For general inquiries, please see our <a href="https://sp.beforward.jp/support/faq">FAQs Page</a> or fill up our <a href="https://sp.beforward.jp/support/inquiryform">Inquiry Form</a>. You may also  <a href="https://www.beforward.jp/beforward_contact_number">Contact our Japan Sales</a> via WhatsApp or Skype.</p>
                <p>As of November 9th, 2020, we have relocated our Japan office to this address below.</p>
                <p>4-20-2 FUDA, CHOFU-SHI, TOKYO 182-0024 JAPAN</p>
                <p><a href="https://www.beforward.jp/beforward_contact_number">Contact Us</a></p>
            </div>}
        </div>
        <a href="http://https://sp.beforward.jp/stocklist/icon_clearance=1/sortkey=a/stock_img=1374" target="_blank" rel="noopener noreferrer">
            <img src="images/be stock.jpg" alt="view stock" className="stock"/>
        </a>
        </>
    )
}

export default SearchCar