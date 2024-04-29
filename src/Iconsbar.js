import React, { useState } from 'react';
import './iconsbar.css';
import { FaCircle } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

function Iconsbar({toggleMode, mode}) {
    
    return (
        <div className='icons-corner'>
            <div className='icons-container'>
                <div className='circle-icon'>
                    <FaCircle className='circle' />
                </div>
                <div className='chat-icon icons' >
                    <CiChat2 className='icon' />
                </div>
                <div className='icons'>
                    <BsPerson className='icon' />

                </div>
                <div className='icons'>
                    <IoSettingsOutline className='icon' />
                </div>
            </div>

            <div className='toggle-mode'>
                <p>Mode 1</p>
                <div className={mode ? 'toggle-switch' : 'emp-toggleSwitch'} onClick={toggleMode}>
                    <div className={mode? 'toggle-button' : 'emp-toggleBtn'}></div>
                </div>
                <p>Mode 2</p>

            </div>
        </div>

    )
}

export default Iconsbar