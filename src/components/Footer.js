import React from 'react'

function Footer(){
    return (
        <>
        <footer>
            <a href="http://sp.beforward.jp/" target="_blank" rel="noopener noreferrer"><img src="images/beforward-logo.png" alt="beforward"/></a>
            <div className="footer-contacts">
                <div className="contact phone">
                    <p>Phone:</p>
                    <a href="#">+81 42 440 3440</a>
                </div>
                <div className="contact email">
                    <p>Email:</p>
                    <a href="mailto:top@beforward.jp">top@beforward.jp</a>
                </div>
                <div className="contact">
                    <p>Fax:</p>
                    <a href="#">+81 42 440 3450</a>
                </div>
                <div className="contact">
                    <p>Address:</p>
                    <a href="#">4-20-2 Fuda Chofu-Shi,</a>
                    <a href="#">Tokyo 182-0024 Japan</a>   
                </div>
            </div>
            <p className="copyright">© 2021 BE FORWARD CO.,LTD. All rights reserved.</p>
        </footer>
        </>
    )
}

export default Footer