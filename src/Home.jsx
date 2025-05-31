import { useState } from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Icon from '/content.png'
function Home() {
        return (<div className='main-home'>
            <div className='main222'>
            <div className='upper'>
                <div className='upper-1'>
                <Link to="/Home"><button className='home-but'>Home</button></Link>
                    <Link to="/Blog"><button  className='home-but'>Blog</button></Link>
                </div>
                <div className='upper-2'>
                    <Link to="/Services"><button  className='home-but'>Services</button></Link>
                    <Link to="/About"><button  className='home-but'>About</button></Link>
                </div>
            </div>
            </div>
            <div className='mid'>
                <div className='mid-icon'>
                <img className='icon' src={Icon}></img>
                </div>
                <div className='mid-write'>
                <h1 className='text1'>WELCOME TO OUR<br></br> BLOG PAGE !</h1>
                    <p className='text2'>  A place where curiosity meets creativity!<br></br>
                        Whether you're here to find inspiration, gather information, <br></br>
                        or simply enjoy some good reading, we're delighted<br></br> to have you join us on this journey.</p>
                </div>
                <div></div>
            </div>
        </div>)
}
export default Home;