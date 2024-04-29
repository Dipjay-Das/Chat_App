// import React, { useState } from 'react';
import './searchbar.css'
import { IoIosAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { BsPatchPlus } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { useState } from 'react';


const users = [
    { id: 1, username: "Person1", details: 'Last details' },
    { id: 2, username: "Person2", details: 'Last details' },
    { id: 3, username: "Person3", details: 'Last details' },
    { id: 3, username: "Person4", details: 'Last details' },
    { id: 3, username: "Person5", details: 'Last details' },

];
const users2 = [
    { id: 1, username: "Research topic 1", details: 'Date of search' },
    { id: 2, username: "Research topic 2", details: 'Date of search' },
    { id: 3, username: "Research topic 3", details: 'Date of search' },
    { id: 3, username: "Research topic 4", details: 'Date of search' },
    { id: 3, username: "Research topic 5", details: 'Date of search' },

];
function Searchbar({ setResult, result, mode, chat }) {
    const [arrow, setArrow] = useState(false);
    const handleArrowIcon = () => {
        setArrow(!arrow);
    }
    
    return (
        <div className={arrow ?  'emp-chat' : 'search-chat'} >
            <div className={arrow ? 'emp-container' : 'username-cotainer'}>
                <div className='search-box'>
                    <div className='search-container'>
                        <CiSearch className='search-icon' />
                        <input type='text' placeholder='Search ID' onKeyDown={(e) => setResult(e.target.value.toLowerCase())} />
                    </div>
                    <div className='add-icon'>
                        <IoIosAdd className='icon' />
                    </div>
                </div>

                <div className={mode ? 'user-box' : 'emp-box'}>
                    <ul>
                        {users.filter((user) => user.username.toLowerCase().includes(result)).map(result => (
                            <li>
                                <h3>{result.username}</h3>
                                <p>{result.details}</p>
                            </li>

                        ))}
                    </ul>
                </div>

                <div className={mode ? 'emp-box' : 'user-box2'}>
                    <ul>
                        {users2.filter((user) => user.username.toLowerCase().includes(result)).map(result => (
                            <li>
                                <h3>{result.username}</h3>
                                <p>{result.details}</p>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>

            <RiArrowDropLeftLine className={mode ? 'arrow-icon' : 'emp-arrow'} onClick={handleArrowIcon} />

            <div className={mode ? 'chat-box' : 'white-box'}>
                <div className='header'>
                    <h2 className={mode ? 'h1' : 'emp-h1'}>Person 1</h2>
                    <h2 className={mode ? 'emp-h2' : 'h2'}>New</h2>
                    <div className='title'>
                        <p>Today</p>
                    </div>
                </div>
                <div className='center'>
                    <div className={mode ? 'box-1' : 'emp-box1'}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus vitae ligula vel scelerisque. In iaculis, nunc id dapibus tempor, libero ligula lacinia felis</p>
                        <FaCircle className='circle1' />
                    </div>
                    <div className='box-2'>
                        <BsPatchPlus className='circle2' />
                        <p className={mode ? 'p1' : 'emp-p1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus vitae ligula vel scelerisque. <br />In iaculis, nunc id dapibus tempor, libero ligula lacinia felis, ut commodo tellus lacus ac risus. Vestibulum id placerat sem. Aenean ullamcorper nunc ut ipsum auctor convallis nec in urna. Suspendisse tempus lacinia velit vel placerat. Proin quis leo ex. Pellentesque tincidunt vulputate velit, id maximus odio rhoncus id. Nunc at velit in ex interdum hendrerit. Ut laoreet facilisis felis, a faucibus justo eleifend id. Sed vel erat tempor, fermentum nisi quis, ornare nibh. Integer ac nulla ultrices<br />
                            Maecenas elementum eros massa, in tempor neque pretium sed. Nam consequat augue enim, in posuere nisi dignissim et. Curabitur efficitur, elit id efficitur molestie, magna tortor lobortis eros, ut sollicitudin nunc velit ut ipsum. Sed non hendrerit lorem, in laoreet quam. Proin a nulla nulla. In consectetur, nunc id malesuada gravida, ipsum enim feugiat ligula, bibendum posuere magna odio nec neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at euismod mi, nec volutpat tellus. Mauris nec faucibus ex. Pellentesque pretium ante faucibus dui pharetra consequat. Curabitur a turpis orci. Curabitur ut velit varius, fringilla metus ac, pharetra ligula.
                        </p>
                        <p className={mode ? 'emp-p2' : 'p2'}>
                            <a>www.line1.com/jsdfhoij</a>
                            <a>www.line1.com2/jsdfhoij</a>
                            <a>www.line1.com3/jsdfhoij</a>
                        </p>
                    </div>
                </div>
                <div className='footer'>
                    <div className={mode ? 'type-box' : 'emp-typeBox'}>
                        <input type='text' placeholder='Type your message here....' />
                        <IoMdSend className={mode ? 'send-icon' : 'emp-send'} />
                    </div>
                    <div className={mode ? 'voiceIcon-container' : 'emp-voiceIconBox'}>
                        <MdOutlineKeyboardVoice className='voice-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar