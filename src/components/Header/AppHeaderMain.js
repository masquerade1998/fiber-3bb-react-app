import React from 'react'
import './AppHeaderMain.css'

function AppHeaderMain() {
    return (
        <div className="header-main">
            <div className="header-row container">
                <div className="header-col header-left">
                    <div id="menu-wrap" className="menu-wrap">
                        <ul id="menu-secondary" className="menu-horizontal">
                            <li className="menu-item" id="menu-item-1">
                                <a className="menu-link" href="#">
                                    &nbsp;เมนูหลัก
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-col header-center">		
                    <h1 className="logo">
                        <a href="https://fiber.3bb.co.th/" title="3BB - ที่หนึ่งของเน็ตบ้านคุณภาพ – มาตรฐานความเร็ว 1 Gbps" rel="home">
                            <img className="standard-logo" src="https://fiber.3bb.co.th/wp-content/uploads/2020/11/3BB_logo_popupfooter.jpg" />	
                        </a>
                    </h1>
                </div>
                <div className="header-col header-right">
                    <div className="custom-html">
                        <ul id="menu-left-top-menu" className="top-links mega-menu">
                            <li id="menu-item-payment" className="menu-item">
                                <a href="https://fiber.3bb.co.th/paymentchannels/">
                                    ช่องทางชำระค่าบริการ
                                </a>
                            </li>
                            &nbsp;|&nbsp;
                            <li id="menu-item-help" className="menu-item">
                                <a href="https://fiber.3bb.co.th/%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD/">
                                    ช่วยเหลือ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="custom-html">
                        <button id="btn-login" className="btn-login">
                            <img className="img-width-header" src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/Profile.png" />
                            <span>
                                เข้าสู่ระบบ
                            </span>
                        </button>
                    </div>
                    <div className="custom-html">
                        <div className="language-switcher language-switcher-container">
                            <div className="shortcode-current-language" style={{width: '60px'}}>
                                <a href="#" className="shortcode-disabled-language disabled-language" title="ไทย" onclick="event.preventDefault()">
                                    <img className="trp-flag-image" src="https://fiber.3bb.co.th/wp-content/plugins/translatepress-multilingual/assets/images/flags/th.png" width={18} height={12} alt="th" title="ไทย" /> 		
                                </a>
                            </div>
                            <div className="shortcode-language" style={{width: '60px', display: 'none'}}>
                                <a href="#" className="shortcode-disabled-language disabled-language" title="ไทย" onclick="event.preventDefault()">
                                    <img className="trp-flag-image" src="https://fiber.3bb.co.th/wp-content/plugins/translatepress-multilingual/assets/images/flags/th.png" width={18} height={12} alt="th" title="ไทย" /> 		
                                </a>
                                <a href="https://fiber.3bb.co.th/en/" title="English">
                                    <img className="trp-flag-image" src="https://fiber.3bb.co.th/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png" width={18} height={12} alt="en_US" title="English" />       
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeaderMain
