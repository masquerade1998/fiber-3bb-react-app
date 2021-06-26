import React from 'react'
import './AppFooterBottom.css'

function AppFooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="footer-row container">
                <div className="footer-left">
                    <span className="footer-copyright">
                        © 2020 บริษัท ทริปเปิลที อินเทอร์เน็ต จำกัด All rights reserved
                    </span>		
                </div>
                <div className="footer-right">
                    <aside className="widget">
                        <div className="textwidget">
                            <a href="https://fiber.3bb.co.th/termsandconditions/">
                                <span>
                                    นโยบายการคุ้มครองข้อมูลส่วนบุคคล 
                                </span>
                            </a> 
                            &nbsp;|&nbsp; 
                            <a href="https://fiber.3bb.co.th/%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD/">
                                <span>
                                    ช่วยเหลือ
                                </span>
                            </a> 
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default AppFooterBottom
