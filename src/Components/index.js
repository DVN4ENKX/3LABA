import React from 'react'
import Logo from "../assets/emlogo.svg"
import serve from "../assets/serve.svg"
import emile from "../assets/emile.svg"
import icon from "../assets/icon.svg"
import robot from "../assets/robot.svg"
import search from "../assets/search.svg"
import "./index.css"
export default function Header() {
    return (
        <div>
            <div class='header'>
                <div class="block_header1">
                    <div className=''>
                        <img src={Logo} />
                    </div>
                    <div className=''>
                        <img src={serve} />
                    </div>
                    <div className=''>
                        <img src={search} />
                    </div>
                </div>
                <div class="block_header2">
                    <div className=''>
                        <img src={emile} />
                    </div>
                    <div className=''>
                        <img src={icon} />
                    </div>

                </div>
            </div>
        </div>
    )
}
