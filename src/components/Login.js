import React from 'react'
import {FaHeart,FaArrowCircleRight,FaBell,FaShoppingCart,FaEnvelope} from 'react-icons/fa'

function Login(){
    return(
        <>
        <section className="login-section">
        <div className="login">
        <h3 className="login-title">Login to access useful features</h3>
        <img src="images/signup.jpg" className="sign-up"/>
        <div className="login-options">
            <button>
                <FaHeart fill="coral"/>
                favorites
            </button>
            <button>
                <FaBell fill="coral"/>
                notify me
            </button>
            <button>
                <FaEnvelope fill="coral"/>
                easy inquiry
            </button>
            <button>
                <FaShoppingCart fill="coral"/>
                buy now
            </button>

        </div>

        <button className="login-button">
            login
        </button>
        </div>
        </section>

        <a href="http://https://mypage.beforward.jp/clients/signup/" target="_blank" className="create-account-link">Create an account <FaArrowCircleRight/></a>

        <div className="buy-now">
        <a href="file:///C:/Users/EXTREME%20GADGETS/Desktop/BE%20FORWARD_%20Japanese%20Used%20Cars%20for%20Sale_files/72c61456aacdcaa67567d9d71f952d3d.jpg">
            <img src="images/buy now.jpg" alt="buy now"/>
        </a>
        <a href="file:///C:/Users/EXTREME%20GADGETS/Desktop/BE%20FORWARD_%20Japanese%20Used%20Cars%20for%20Sale_files/eb6410f7f1832a9009528db4209750f6.jpg">
            <img src="images/stock.jpg" alt="stock"/>
        </a>
        <a href="https://cdn.beforward.jp/assets/pdf/shipping_schedule_africa.pdf">
            <img src="images/shipping.jpg" alt="shipping"/>
        </a>
        </div>
        </>
    )
}

export default Login