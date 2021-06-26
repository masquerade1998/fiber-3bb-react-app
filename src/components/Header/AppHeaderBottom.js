import React from 'react'
import './AppHeaderBottom.css'

function AppHeaderBottom() {
    return (
        <div className="header-bottom">
            <div className="header-row container">
                <div className="header-col">
                    <div id="menu-wrap" className="menu-wrap">
                        <ul id="main-menu" className="main-menu">
                            <li id="menu-item-1" className="menu-item">
                                <a className="menu-link" href="https://fiber.3bb.co.th/" tabIndex={0}>
                                    หน้าแรก
                                </a>
                            </li>
                            <li id="menu-item-2" className="menu-item">
                                <a className="menu-link" href="https://fiber.3bb.co.th/3bb-giga-fiber/" tabIndex={0}>
                                    แพ็กเกจอินเทอร์เน็ต
                                </a>
                            </li>
                            <li id="menu-item-3" className="menu-item">
                                <a className="menu-link" href="https://gigatv.3bb.co.th" tabIndex={0}>
                                    ทีวีและความบันเทิง
                                </a>
                            </li>
                            <li id="menu-item-4" className="menu-item">
                                <a className="menu-link" href="https://fiber.3bb.co.th/promotion/" tabIndex={0}>
                                    โปรโมชั่น
                                </a>
                            </li>
                            <li id="menu-item-5" className="menu-item">
                                <a className="menu-link" href="https://www.3bbprivilege.com/" tabIndex={0}>
                                    พอยต์และสิทธิพิเศษ
                                </a>
                            </li>
                            <li id="menu-item-6" className="menu-item">
                                <a className="menu-link" href="https://fiber.3bb.co.th/shop/" tabIndex={0}>
                                    ศูนย์บริการ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeaderBottom

