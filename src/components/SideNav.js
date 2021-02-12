import React, {useState} from 'react'
import {FaCar,FaCog,FaSearch,FaTimes} from 'react-icons/fa'

function SideNav() {
    const[showSideNav,setShowSideNav] = useState(true)
    return (
        <>
            <div className="side-nav">
                <div className="light top">
                    <div className="top">
                        <p><FaCar/> Used Cars</p>
                        <button onClick={setShowSideNav(false)}>
                            <FaTimes/>
                        </button>
                    </div>
                    <p><FaCog/> Site Settings</p>
                </div>
                <div className="dark">
                    <div className="item">
                        <p>Currency</p>
                        <select>
                            <option value="USD">USD</option>
                            <option value="JPY">JPY</option>
                            <option value="EURO">EURO</option>
                            <option value="NZD">NZD</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                    </div>
                    <div className="item">
                        <p>Language</p>
                        <select>
                            <option value="English">English</option>
                            <option value="Francais">Francais</option>
                            <option value="Portugues">Portugues</option>
                            <option value="Espanol">Espanol</option>
                        </select>
                    </div>
                </div>
                <div className="light">
                    <p><FaSearch/> Search</p>
                </div>
                <div className="dark">
                    <p>Premium Class</p>
                    <p>Outlet</p>
                    <p>Valentine's Day</p>
                    <p>PICK UP</p>
                    <p>Prime seller</p>
                    <p>Search by Make</p>
                </div>
                <div className="light">
                    <h3>Local Services</h3>
                </div>
                <div className="dark">
                    <p>Africa</p>
                    <p>Other Regions</p>
                </div>

            </div>
        </>
    )
}

export default SideNav
